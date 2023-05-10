import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios'; 

declare namespace Components {
    namespace Schemas {
        /**
         * example:
         * {
         *   "countAdults": 5,
         *   "countAvailableOffers": 7,
         *   "countChildren": 5,
         *   "departureDate": "2000-01-23",
         *   "duration": 2,
         *   "hotel": {
         *     "id": 0.8008281904610115,
         *     "name": "name",
         *     "stars": 6.027456183070403
         *   },
         *   "mealType": "mealType",
         *   "minPrice": 1.4658129805029452,
         *   "returnDate": "2000-01-23",
         *   "roomType": "roomType"
         * }
         */
        export interface BestHotelOffer {
            countAdults: number;
            countAvailableOffers: number;
            countChildren: number;
            departureDate: string; // date
            duration: number;
            hotel: /**
             * example:
             * {
             *   "id": 0.8008281904610115,
             *   "name": "name",
             *   "stars": 6.027456183070403
             * }
             */
            Hotel;
            mealType?: string;
            minPrice: number;
            returnDate: string; // date
            roomType?: string;
        }
        export type GetBestHotelOffersResponse = /**
         * example:
         * {
         *   "countAdults": 5,
         *   "countAvailableOffers": 7,
         *   "countChildren": 5,
         *   "departureDate": "2000-01-23",
         *   "duration": 2,
         *   "hotel": {
         *     "id": 0.8008281904610115,
         *     "name": "name",
         *     "stars": 6.027456183070403
         *   },
         *   "mealType": "mealType",
         *   "minPrice": 1.4658129805029452,
         *   "returnDate": "2000-01-23",
         *   "roomType": "roomType"
         * }
         */
        BestHotelOffer[];
        /**
         * example:
         * {
         *   "hotel": {
         *     "id": 0.8008281904610115,
         *     "name": "name",
         *     "stars": 6.027456183070403
         *   },
         *   "items": [
         *     {
         *       "countAdults": 6,
         *       "countChildren": 1,
         *       "inboundArrivalAirport": "inboundArrivalAirport",
         *       "inboundArrivalDatetime": "inboundArrivalDatetime",
         *       "inboundDepartureAirport": "inboundDepartureAirport",
         *       "inboundDepartureDatetime": "2000-01-23",
         *       "mealType": "mealType",
         *       "oceanView": true,
         *       "outboundArrivalAirport": "outboundArrivalAirport",
         *       "outboundArrivalDatetime": "outboundArrivalDatetime",
         *       "outboundDepartureAirport": "outboundDepartureAirport",
         *       "outbundDepartureDatetime": "2000-01-23",
         *       "price": 0.8008281904610115,
         *       "roomType": "roomType"
         *     },
         *     {
         *       "countAdults": 6,
         *       "countChildren": 1,
         *       "inboundArrivalAirport": "inboundArrivalAirport",
         *       "inboundArrivalDatetime": "inboundArrivalDatetime",
         *       "inboundDepartureAirport": "inboundDepartureAirport",
         *       "inboundDepartureDatetime": "2000-01-23",
         *       "mealType": "mealType",
         *       "oceanView": true,
         *       "outboundArrivalAirport": "outboundArrivalAirport",
         *       "outboundArrivalDatetime": "outboundArrivalDatetime",
         *       "outboundDepartureAirport": "outboundDepartureAirport",
         *       "outbundDepartureDatetime": "2000-01-23",
         *       "price": 0.8008281904610115,
         *       "roomType": "roomType"
         *     }
         *   ]
         * }
         */
        export interface GetHotelOffersResponse {
            hotel: /**
             * example:
             * {
             *   "id": 0.8008281904610115,
             *   "name": "name",
             *   "stars": 6.027456183070403
             * }
             */
            Hotel;
            items: /**
             * example:
             * {
             *   "countAdults": 6,
             *   "countChildren": 1,
             *   "inboundArrivalAirport": "inboundArrivalAirport",
             *   "inboundArrivalDatetime": "inboundArrivalDatetime",
             *   "inboundDepartureAirport": "inboundDepartureAirport",
             *   "inboundDepartureDatetime": "2000-01-23",
             *   "mealType": "mealType",
             *   "oceanView": true,
             *   "outboundArrivalAirport": "outboundArrivalAirport",
             *   "outboundArrivalDatetime": "outboundArrivalDatetime",
             *   "outboundDepartureAirport": "outboundDepartureAirport",
             *   "outbundDepartureDatetime": "2000-01-23",
             *   "price": 0.8008281904610115,
             *   "roomType": "roomType"
             * }
             */
            Offer[];
        }
        /**
         * example:
         * {
         *   "id": 0.8008281904610115,
         *   "name": "name",
         *   "stars": 6.027456183070403
         * }
         */
        export interface Hotel {
            id: number;
            name: string;
            stars: number;
        }
        /**
         * example:
         * {
         *   "countAdults": 6,
         *   "countChildren": 1,
         *   "inboundArrivalAirport": "inboundArrivalAirport",
         *   "inboundArrivalDatetime": "inboundArrivalDatetime",
         *   "inboundDepartureAirport": "inboundDepartureAirport",
         *   "inboundDepartureDatetime": "2000-01-23",
         *   "mealType": "mealType",
         *   "oceanView": true,
         *   "outboundArrivalAirport": "outboundArrivalAirport",
         *   "outboundArrivalDatetime": "outboundArrivalDatetime",
         *   "outboundDepartureAirport": "outboundDepartureAirport",
         *   "outbundDepartureDatetime": "2000-01-23",
         *   "price": 0.8008281904610115,
         *   "roomType": "roomType"
         * }
         */
        export interface Offer {
            countAdults: number;
            countChildren: number;
            inboundArrivalAirport: string;
            inboundArrivalDatetime: string; // datetime
            inboundDepartureAirport: string;
            inboundDepartureDatetime: string; // date
            mealType: string;
            oceanView: boolean;
            outboundArrivalAirport: string;
            outboundArrivalDatetime: string; // datetime
            outboundDepartureAirport: string;
            outbundDepartureDatetime?: string; // date
            price: number;
            roomType: string;
        }
    }
}
declare namespace Paths {
    namespace GetBestOffersByHotel {
        namespace Parameters {
            export type CountAdults = number;
            export type CountChildren = number;
            export type DepartureAirports = string[];
            export type Duration = number;
            export type EarliestDepartureDate = string; // date
            export type LatestReturnDate = string; // date
        }
        export interface QueryParameters {
            earliestDepartureDate: Parameters.EarliestDepartureDate /* date */;
            latestReturnDate: Parameters.LatestReturnDate /* date */;
            duration: Parameters.Duration;
            countAdults: Parameters.CountAdults;
            countChildren: Parameters.CountChildren;
            departureAirports: Parameters.DepartureAirports;
        }
        namespace Responses {
            export type $200 = Components.Schemas.GetBestHotelOffersResponse;
        }
    }
    namespace GetHotelOffers {
        namespace Parameters {
            export type CountAdults = number;
            export type CountChildren = number;
            export type DepartureAirports = string[];
            export type Duration = number;
            export type EarliestDepartureDate = string; // date
            export type HotelId = number;
            export type LatestReturnDate = string; // date
        }
        export interface PathParameters {
            hotelId: Parameters.HotelId;
        }
        export interface QueryParameters {
            earliestDepartureDate: Parameters.EarliestDepartureDate /* date */;
            latestReturnDate: Parameters.LatestReturnDate /* date */;
            duration: Parameters.Duration;
            countAdults: Parameters.CountAdults;
            countChildren: Parameters.CountChildren;
            departureAirports: Parameters.DepartureAirports;
        }
        namespace Responses {
            export type $200 = /**
             * example:
             * {
             *   "hotel": {
             *     "id": 0.8008281904610115,
             *     "name": "name",
             *     "stars": 6.027456183070403
             *   },
             *   "items": [
             *     {
             *       "countAdults": 6,
             *       "countChildren": 1,
             *       "inboundArrivalAirport": "inboundArrivalAirport",
             *       "inboundArrivalDatetime": "inboundArrivalDatetime",
             *       "inboundDepartureAirport": "inboundDepartureAirport",
             *       "inboundDepartureDatetime": "2000-01-23",
             *       "mealType": "mealType",
             *       "oceanView": true,
             *       "outboundArrivalAirport": "outboundArrivalAirport",
             *       "outboundArrivalDatetime": "outboundArrivalDatetime",
             *       "outboundDepartureAirport": "outboundDepartureAirport",
             *       "outbundDepartureDatetime": "2000-01-23",
             *       "price": 0.8008281904610115,
             *       "roomType": "roomType"
             *     },
             *     {
             *       "countAdults": 6,
             *       "countChildren": 1,
             *       "inboundArrivalAirport": "inboundArrivalAirport",
             *       "inboundArrivalDatetime": "inboundArrivalDatetime",
             *       "inboundDepartureAirport": "inboundDepartureAirport",
             *       "inboundDepartureDatetime": "2000-01-23",
             *       "mealType": "mealType",
             *       "oceanView": true,
             *       "outboundArrivalAirport": "outboundArrivalAirport",
             *       "outboundArrivalDatetime": "outboundArrivalDatetime",
             *       "outboundDepartureAirport": "outboundDepartureAirport",
             *       "outbundDepartureDatetime": "2000-01-23",
             *       "price": 0.8008281904610115,
             *       "roomType": "roomType"
             *     }
             *   ]
             * }
             */
            Components.Schemas.GetHotelOffersResponse;
        }
    }
}

export interface OperationMethods {
  /**
   * get_best_offers_by_hotel - get the best (i.e. cheapest) offer for every hotel that has at least one available offer for a given search
   */
  'get_best_offers_by_hotel'(
    parameters?: Parameters<Paths.GetBestOffersByHotel.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetBestOffersByHotel.Responses.$200>
  /**
   * get_hotel_offers - get available offers for a given hotel
   */
  'get_hotel_offers'(
    parameters?: Parameters<Paths.GetHotelOffers.PathParameters & Paths.GetHotelOffers.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetHotelOffers.Responses.$200>
}

export interface PathsDictionary {
  ['/bestOffersByHotel']: {
    /**
     * get_best_offers_by_hotel - get the best (i.e. cheapest) offer for every hotel that has at least one available offer for a given search
     */
    'get'(
      parameters?: Parameters<Paths.GetBestOffersByHotel.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetBestOffersByHotel.Responses.$200>
  }
  ['/hotels/{hotelId}/offers']: {
    /**
     * get_hotel_offers - get available offers for a given hotel
     */
    'get'(
      parameters?: Parameters<Paths.GetHotelOffers.PathParameters & Paths.GetHotelOffers.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetHotelOffers.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
