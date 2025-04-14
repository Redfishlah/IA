const express = require('express');
const supabase = require('../supabaseClient');
const router = express.Router();

router.get('/', async (req, res) => {
  const { data, error } = await supabase
    .from('comments')
    .select('id, text, created_at, user_id, users(username, avatar_url)')
    .order('created_at', { ascending: false });

  if (error) return res.status(500).json({ error: 'Failed to fetch comments' });

  res.json(data.map(c => ({
    id: c.id,
    text: c.text,
    username: c.users.username,
    avatar: c.users.avatar_url,
    created_at: c.created_at,
    user_id: c.user_id,
  })));
});

router.post('/', async (req, res) => {
  const { user_id, text } = req.body;
  if (!user_id || !text) return res.status(400).json({ error: 'Missing user_id or text' });

  const { data, error } = await supabase
    .from('comments')
    .insert({ user_id, text })
    .select()
    .single();

  if (error) return res.status(500).json({ error: 'Failed to add comment' });

  res.json(data);
});

router.delete('/:id', async (req, res) => {
  const { user_id } = req.body; // Should be passed from frontend
  const commentId = req.params.id;

  const { data: comment, error: fetchError } = await supabase
    .from('comments')
    .select()
    .eq('id', commentId)
    .single();

  if (fetchError || !comment) return res.status(404).json({ error: 'Comment not found' });
  if (comment.user_id !== user_id) return res.status(403).json({ error: 'Permission denied' });

  const { error } = await supabase.from('comments').delete().eq('id', commentId);
  if (error) return res.status(500).json({ error: 'Failed to delete' });

  res.json({ message: 'Comment deleted' });
});

module.exports = router;
