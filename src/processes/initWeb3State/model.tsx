import {CHAIN_ID_NUMBER} from "../../shared/config";
import {useAppDispatch} from "../../app/model/hooks";
import {setError} from "../../app/model/slice/blockChain";

export const useSetErrorNetwork = () => {
   const dispatch = useAppDispatch();

   const errorNetwork = async () => {
      const {ethereum} = window;
      const accounts = await ethereum.request({ method: 'eth_accounts' })
      const chaiId = await ethereum.networkVersion;

      if(accounts.length > 0 && chaiId !== CHAIN_ID_NUMBER) {
         dispatch(setError('please change the network'))
      }
   }

   return errorNetwork
}