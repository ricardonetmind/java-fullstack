package es.ricardo.client;

import java.rmi.RemoteException;

import es.ricardo.HelloInterface;
import es.ricardo.HelloInterfaceProxy;

public class TopDownHelloApp {

	public static void main(String[] args) throws RemoteException {
		// TODO Auto-generated method stub
		HelloInterface helloInterface=new HelloInterfaceProxy("http://localhost:8080/HelloTopDown/services/HelloImplementationService");
		System.out.println(helloInterface.hello("Ricardo Donato Majox!"));
	}

}
