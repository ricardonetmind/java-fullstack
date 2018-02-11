/**
 * HelloImplementationService.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package es.ricardo;

public interface HelloImplementationService extends javax.xml.rpc.Service {
    public java.lang.String getHolaPepePortAddress();

    public es.ricardo.HelloInterface getHolaPepePort() throws javax.xml.rpc.ServiceException;

    public es.ricardo.HelloInterface getHolaPepePort(java.net.URL portAddress) throws javax.xml.rpc.ServiceException;
}
