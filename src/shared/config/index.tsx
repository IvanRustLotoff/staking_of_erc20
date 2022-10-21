
/**
 * Модуль инициализации env-переменных
 * @remark Если не найдено значение хоть одной переменной,
 * Приложение сразу выбросит ошибку, при инициализации модуля
 * @module
 */

/**
 * Получение env-переменной
 * @throwable
 */

const getEnvVar = (key: string) => {
   if (process.env[key] === undefined) {
      throw new Error(`Env variable ${key} is required`);
   }
   return process.env[key] || "";
};

export const CHAIN_ID = getEnvVar("REACT_APP_CHAIN_ID");
export const CHAIN_ID_NUMBER = getEnvVar("REACT_APP_CHAIN_ID_NUMBER");
export const INFURA_ID = getEnvVar("REACT_APP_INFURA_ID");

export const NODE_ENV = getEnvVar("NODE_ENV");

export const isDevEnv = NODE_ENV === "development";

export const isProdEnv = NODE_ENV === "production";