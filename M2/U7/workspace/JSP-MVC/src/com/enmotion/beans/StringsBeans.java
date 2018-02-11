package com.enmotion.beans;

import java.util.List;

public class StringsBeans implements java.io.Serializable{
	private List<String> innerlist=null;
	
	public StringsBeans(){
		
	}

	public List<String> getMylist() {
		return innerlist;
	}

	public void setMylist(List<String> mylist) {
		this.innerlist = mylist;
	}
	
	

}
