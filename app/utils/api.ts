const awaitMs = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export type LoggedUserResponseData = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export type AppResponse<T> = {
  success: boolean;
  data: T;
}

export type RegisterUserArgs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const fakeRegister = async (userData: RegisterUserArgs): Promise<AppResponse<LoggedUserResponseData>> => {
  await awaitMs(Math.random() * 2 * 1000);
  return {
    success: true,
    data: {
      id: 42,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
    }
  };
};

export type LoginUserArgs = {
  email: string;
  password: string;
}

export const fakeLogin = async (userData: LoginUserArgs): Promise<AppResponse<LoggedUserResponseData>> => {
  await awaitMs(Math.random() * 2 * 1000);
  return {
    success: true,
    data: {
      id: 42,
      firstName: 'FakeFirstName',
      lastName: 'FakeLastName',
      email: userData.email,
    }
  };
};

export const fakeGetUser = async (): Promise<AppResponse<LoggedUserResponseData | null>> => {
  await awaitMs(Math.random() * 2 * 1000);
  // Simuler un utilisateur déjà connecté (50% de chance)
  if (Math.random() > 0.5) {
    return {
      success: true,
      data: {
        id: 42,
        firstName: 'FakeFirstName',
        lastName: 'FakeLastName',
        email: 'fake@example.com',
      }
    };
  } else {
    return {
      success: true,
      data: null
    };
  }
};