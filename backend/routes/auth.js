const express = require('express');
const multer = require('multer');
const supabase = require('../supabaseClient');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');

router.post('/register', upload.single('avatar'), async (req, res) => {
  const { username, password } = req.body;
  const file = req.file;

  if (!username || !password || !file) return res.status(400).json({ error: 'All fields required' });

  const avatarExt = file.originalname.split('.').pop();
//   const avatarPath = `avatars/${Date.now()}.${avatarExt}`;
  const avatarPath = `${Date.now()}.${avatarExt}`;
  
  
  const fileBuffer = fs.readFileSync(file.path);

  const { data: uploadData, error: uploadErr } = await supabase.storage
    .from('avatars')
    .upload(avatarPath, fileBuffer, {
      contentType: file.mimetype,
    });

  fs.unlinkSync(file.path); // remove temp file
  if (uploadErr) return res.status(500).json({ error: 'Failed to upload avatar' });

  const avatarUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/avatars/${avatarPath}`;

  const { data, error } = await supabase
    .from('users')
    .insert({ username, password, avatar_url: avatarUrl })
    .select()
    .single();

  if (error) return res.status(500).json({ error: 'User registration failed' });

  res.json(data);
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const { data, error } = await supabase
    .from('users')
    .select()
    .eq('username', username)
    .eq('password', password)
    .single();

  if (error || !data) return res.status(401).json({ error: 'Invalid credentials' });

  res.json(data);
});

module.exports = router;
