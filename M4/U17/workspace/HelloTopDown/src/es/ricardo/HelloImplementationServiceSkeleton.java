
/**
 * HelloImplementationServiceSkeleton.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis2 version: 1.6.3  Built on : Jun 27, 2015 (11:17:49 BST)
 */
    package es.ricardo;
    /**
     *  HelloImplementationServiceSkeleton java skeleton for the axisService
     */
    public class HelloImplementationServiceSkeleton{
        
         
        /**
         * Auto generated method signature
         * 
                                     * @param hello 
             * @return helloResponse 
         */
        
                 public es.ricardo.HelloResponseE hello
                  (
                  es.ricardo.HelloE hello
                  )
            {
                //TODO : fill this with the necessary business logic
                //throw new  java.lang.UnsupportedOperationException("Please implement " + this.getClass().getName() + "#hello");
                	 HelloResponseE ahellores=new HelloResponseE();
                	 HelloResponse aresp=new HelloResponse();
                	 aresp.set_return("Hola:"+hello.getHello().getArg0());
                	 ahellores.setHelloResponse(aresp);
                	 return ahellores;
        }
     
    }
    