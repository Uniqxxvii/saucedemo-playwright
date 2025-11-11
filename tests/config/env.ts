type User = {
  username: string;
  password: string;
};

type EnvConfig = {
  baseURL: string;
  users: {
    standard: User;
    locked: User;
    invalid: User;
  };
};

export const ENV: EnvConfig = {
  baseURL: 'https://www.saucedemo.com',

  users: {
    standard: {
      username: 'standard_user',
      password: 'secret_sauce',
    },
    locked: {
      username: 'locked_out_user',
      password: 'secret_sauce',
    },
    invalid: {
      username: 'wrong',
      password: 'wrong',
    },
  },
};
