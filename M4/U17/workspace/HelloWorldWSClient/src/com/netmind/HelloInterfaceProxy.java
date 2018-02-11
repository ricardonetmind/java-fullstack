package com.netmind;

public class HelloInterfaceProxy implements com.netmind.HelloInterface {
  private String _endpoint = null;
  private com.netmind.HelloInterface helloInterface = null;
  
  public HelloInterfaceProxy() {
    _initHelloInterfaceProxy();
  }
  
  public HelloInterfaceProxy(String endpoint) {
    _endpoint = endpoint;
    _initHelloInterfaceProxy();
  }
  
  private void _initHelloInterfaceProxy() {
    try {
      helloInterface = (new com.netmind.HelloImplementationServiceLocator()).getHelloImplementationPort();
      if (helloInterface != null) {
        if (_endpoint != null)
          ((javax.xml.rpc.Stub)helloInterface)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
        else
          _endpoint = (String)((javax.xml.rpc.Stub)helloInterface)._getProperty("javax.xml.rpc.service.endpoint.address");
      }
      
    }
    catch (javax.xml.rpc.ServiceException serviceException) {}
  }
  
  public String getEndpoint() {
    return _endpoint;
  }
  
  public void setEndpoint(String endpoint) {
    _endpoint = endpoint;
    if (helloInterface != null)
      ((javax.xml.rpc.Stub)helloInterface)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
    
  }
  
  public com.netmind.HelloInterface getHelloInterface() {
    if (helloInterface == null)
      _initHelloInterfaceProxy();
    return helloInterface;
  }
  
  public java.lang.String getXML(java.lang.String arg0) throws java.rmi.RemoteException{
    if (helloInterface == null)
      _initHelloInterfaceProxy();
    return helloInterface.getXML(arg0);
  }
  
  public java.lang.String hello(java.lang.String arg0) throws java.rmi.RemoteException{
    if (helloInterface == null)
      _initHelloInterfaceProxy();
    return helloInterface.hello(arg0);
  }
  
  
}