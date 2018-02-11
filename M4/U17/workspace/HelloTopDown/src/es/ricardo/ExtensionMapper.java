
/**
 * ExtensionMapper.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis2 version: 1.6.3  Built on : Jun 27, 2015 (11:18:31 BST)
 */

        
            package es.ricardo;
        
            /**
            *  ExtensionMapper class
            */
            @SuppressWarnings({"unchecked","unused"})
        
        public  class ExtensionMapper{

          public static java.lang.Object getTypeObject(java.lang.String namespaceURI,
                                                       java.lang.String typeName,
                                                       javax.xml.stream.XMLStreamReader reader) throws java.lang.Exception{

              
                  if (
                  "http://ricardo.es/".equals(namespaceURI) &&
                  "helloResponse".equals(typeName)){
                   
                            return  es.ricardo.HelloResponse.Factory.parse(reader);
                        

                  }

              
                  if (
                  "http://ricardo.es/".equals(namespaceURI) &&
                  "hello".equals(typeName)){
                   
                            return  es.ricardo.Hello.Factory.parse(reader);
                        

                  }

              
             throw new org.apache.axis2.databinding.ADBException("Unsupported type " + namespaceURI + " " + typeName);
          }

        }
    