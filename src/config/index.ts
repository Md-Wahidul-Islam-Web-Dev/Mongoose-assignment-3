import dotenv from 'dotenv';
import path from 'path';
dotenv.config({path:path.join(process.cwd(), '.env')});

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT || 2000, // fallback port
  database_url: process.env.DATABASE_URL || ''
};
//https://docs.google.com/spreadsheets/d/1Hl_0blCPKBMxIrgjJdJQNf14eJ1kbVfrmTmW0TkuXWE/edit?usp=sharing


//https://docs.google.com/spreadsheets/d/1Hl_0blCPKBMxIrgjJdJQNf14eJ1kbVfrmTmW0TkuXWE/edit?gid=0#gid=0

//https://docs.google.com/spreadsheets/d/1Hl_0blCPKBMxIrgjJdJQNf14eJ1kbVfrmTmW0TkuXWE/edit?usp=sharing