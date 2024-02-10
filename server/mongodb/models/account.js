import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true
    },
    authProvider: {
      type: String,
      required: true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
}, { timestamps: true });

const Account=mongoose.model("Account",AccountSchema);

export default Account;

 
export const getUserById = (id) => {
    return User.findById(id);
}

export const createAccount = (values) => {
  console.log('Creating account with values:', values);
  return new Account(values).save()
    .then((account) => account.toObject())
    .catch((error) => {
      console.error('Error creating account:', error);
      throw error;
    });
};

