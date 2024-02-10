import express from 'express';
import dotenv from 'dotenv'
dotenv.config()

import {createAccount } from '../mongodb/models/account.js';
import { getUserByEmail ,createUser} from '../mongodb/models/user.js';
import { authentication,random } from '../helpers/index.js';


export const socialAuth = async (req, res) => {
    try {
      const { email, provider } = req.body;
      
      console.log(email,provider)
      if (!email || !provider) {
        return res.sendStatus(400);
      }
  
      const existingUser = await getUserByEmail(email);
    
      if (existingUser) {
        const saltr = random();
        
        if(existingUser.hasSocialLogin === false){
            existingUser.hasSocialLogin = true;
            const account = await createAccount({
                authProvider: provider, 
                email: email,
                userId: existingUser._id
              })
        }

        existingUser.authentication.sessionToken = authentication(saltr, existingUser._id.toString());
    
        await existingUser.save();
    
        res.cookie('TT-AUTH', existingUser.authentication.sessionToken, { domain: 'localhost', path: '/' });
        return res.status(200).json(existingUser).end();
    }
      const salt = random();
      const pass = authentication(salt, process.env.AUTH_PASSWORD)
     
      const user = await createUser({
        email : email,
        authentication: {
          salt:salt,
          password: pass,
        },
        hasSocialLogin:true,
        plantIds: []
      });

      const account = await createAccount({
        authProvider: provider, 
        email: email,
        userId: user._id
      })
      
      const saltr = random();
      user.authentication.sessionToken = authentication(saltr, user._id.toString());
  
      res.cookie('TT-AUTH', user.authentication.sessionToken, { domain: 'localhost', path: '/' });
      return res.status(200).json(user).end();
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }