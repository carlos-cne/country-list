/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllCountries
// ====================================================

export interface GetAllCountries_countries {
  __typename: "Country";
  code: string;
  name: string;
  emoji: string;
  capital: string | null;
}

export interface GetAllCountries {
  countries: GetAllCountries_countries[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCountry
// ====================================================

export interface GetCountry_country_continent {
  __typename: "Continent";
  name: string;
}

export interface GetCountry_country {
  __typename: "Country";
  code: string;
  name: string;
  native: string;
  emoji: string;
  capital: string | null;
  continent: GetCountry_country_continent;
  currency: string | null;
}

export interface GetCountry {
  country: GetCountry_country | null;
}

export interface GetCountryVariables {
  code: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
