import { signIn } from './auth';

const main = async () => {
  try {
    const user = await signIn('beccaqwaterson@gmail.com', 'admin123');
    console.log('User signed in:', user);
  } catch (error) {
    console.error('Error signing in:', error);
  }
};

main();