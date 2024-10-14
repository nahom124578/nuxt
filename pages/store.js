export const store = {
  registeredEmails: ['nahom@aait'],
  passwords: {
    'nahom@gmail.com': 'password123',
  },
  currentEmail: 'nahom@aait', // Store the email entered earlier
  isEmailRegistered(email) {
    return this.registeredEmails.includes(email);
  }
};
