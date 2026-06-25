import {Router} from 'express';
import supabase from '../config/supabase.js';

const router = Router();

router.get('/users',async(req,res)=>{
    const {data,error} = await supabase.from('users').select('*');

    if(error) return res.status(400).json({error});
    res.json({data});
})

router.post('/users', async (req, res) => {
  const { name, email } = req.body;

  const { data, error } = await supabase
    .from('users')
    .insert([{ name, email }])
    .select();

  if (error) return res.status(400).json({ error });
  res.status(201).json({ data });
});


export default router;