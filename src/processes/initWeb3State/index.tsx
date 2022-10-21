import {useEffect} from "react";
import {useSetWeb3Data} from "../../shared/lib/setWeb3Data";
import {useSetErrorNetwork} from "./model";

declare global {
   interface Window {
      ethereum:any;
   }
}

export const InitBlockChainData = ({children}: {children: React.ReactNode }) => {
   const { ethereum, setData } = useSetWeb3Data();
   const errorNetwork = useSetErrorNetwork();

   useEffect(() => {
      setData();
   }, [setData])

   useEffect(() => {
      ethereum?.on("chainChanged", errorNetwork);

      return () => {
         ethereum?.removeListener("chainChanged", errorNetwork);
      };
   }, [errorNetwork, ethereum]);

   return <>{children}</>
}