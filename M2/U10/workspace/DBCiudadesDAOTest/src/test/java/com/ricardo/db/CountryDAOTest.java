package com.ricardo.db;

import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.junit.BeforeClass;
import org.junit.Test;

import com.ricardo.models.Country;

import junit.framework.TestCase;

public class CountryDAOTest extends com.ricardo.Test {
	private static Logger logger = Logger.getLogger("CountryDAOTest");

	@BeforeClass
	public static void setUpClass() {
		setUpContext();
	}

	@Test
	public void testListaCountries() {

		logger.log(Level.INFO, "Entrando al test...");

		try {
			CountryDAO ctrDAO = CountryDAOFactory.getDAO("mysql");
			List<Country> listaCountry= ctrDAO.getLista();
			
			logger.log(Level.INFO, "listaCountry..." + listaCountry);
			assertTrue(listaCountry != null && !listaCountry.isEmpty());

		} catch (Exception ex) {
			fail();
			ex.printStackTrace();
			System.out.println("Error en DAO:" + ex);
		}

		logger.log(Level.INFO, "Fin de test...");
	}
}
