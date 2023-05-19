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
         *   "duration": 2,
         *   "returnDate": "2000-01-23",
         *   "countChildren": 5,
         *   "minPrice": 1.4658129805029452,
         *   "mealType": "mealType",
         *   "hotel": {
         *     "name": "name",
         *     "id": 0.8008281904610115,
         *     "stars": 6.027456183070403
         *   },
         *   "departureDate": "2000-01-23",
         *   "countAvailableOffers": 7,
         *   "roomType": "roomType",
         *   "countAdults": 5
         * }
         */
        export interface BestHotelOffer {
            hotel: /**
             * example:
             * {
             *   "name": "name",
             *   "id": 0.8008281904610115,
             *   "stars": 6.027456183070403
             * }
             */
            Hotel;
            minPrice: number;
            departureDate: string; // date
            returnDate: string; // date
            roomType?: string;
            mealType?: string;
            countAdults: number;
            countChildren: number;
            duration: number;
            countAvailableOffers: number;
        }
        export type GetBestHotelOffersResponse = /**
         * example:
         * {
         *   "duration": 2,
         *   "returnDate": "2000-01-23",
         *   "countChildren": 5,
         *   "minPrice": 1.4658129805029452,
         *   "mealType": "mealType",
         *   "hotel": {
         *     "name": "name",
         *     "id": 0.8008281904610115,
         *     "stars": 6.027456183070403
         *   },
         *   "departureDate": "2000-01-23",
         *   "countAvailableOffers": 7,
         *   "roomType": "roomType",
         *   "countAdults": 5
         * }
         */
        BestHotelOffer[];
        /**
         * example:
         * {
         *   "hotel": {
         *     "name": "name",
         *     "id": 0.8008281904610115,
         *     "stars": 6.027456183070403
         *   },
         *   "items": [
         *     {
         *       "countChildren": 1,
         *       "inboundArrivalDatetime": "inboundArrivalDatetime",
         *       "mealType": "mealType",
         *       "outboundDepartureDatetime": "2000-01-23",
         *       "outboundDepartureAirport": "outboundDepartureAirport",
         *       "outboundArrivalAirport": "outboundArrivalAirport",
         *       "countAdults": 6,
         *       "oceanView": true,
         *       "price": 0.8008281904610115,
         *       "inboundArrivalAirport": "inboundArrivalAirport",
         *       "inboundDepartureAirport": "inboundDepartureAirport",
         *       "outboundArrivalDatetime": "outboundArrivalDatetime",
         *       "roomType": "roomType",
         *       "inboundDepartureDatetime": "2000-01-23"
         *     },
         *     {
         *       "countChildren": 1,
         *       "inboundArrivalDatetime": "inboundArrivalDatetime",
         *       "mealType": "mealType",
         *       "outboundDepartureDatetime": "2000-01-23",
         *       "outboundDepartureAirport": "outboundDepartureAirport",
         *       "outboundArrivalAirport": "outboundArrivalAirport",
         *       "countAdults": 6,
         *       "oceanView": true,
         *       "price": 0.8008281904610115,
         *       "inboundArrivalAirport": "inboundArrivalAirport",
         *       "inboundDepartureAirport": "inboundDepartureAirport",
         *       "outboundArrivalDatetime": "outboundArrivalDatetime",
         *       "roomType": "roomType",
         *       "inboundDepartureDatetime": "2000-01-23"
         *     }
         *   ]
         * }
         */
        export interface GetHotelOffersResponse {
            hotel: /**
             * example:
             * {
             *   "name": "name",
             *   "id": 0.8008281904610115,
             *   "stars": 6.027456183070403
             * }
             */
            Hotel;
            items: /**
             * example:
             * {
             *   "countChildren": 1,
             *   "inboundArrivalDatetime": "inboundArrivalDatetime",
             *   "mealType": "mealType",
             *   "outboundDepartureDatetime": "2000-01-23",
             *   "outboundDepartureAirport": "outboundDepartureAirport",
             *   "outboundArrivalAirport": "outboundArrivalAirport",
             *   "countAdults": 6,
             *   "oceanView": true,
             *   "price": 0.8008281904610115,
             *   "inboundArrivalAirport": "inboundArrivalAirport",
             *   "inboundDepartureAirport": "inboundDepartureAirport",
             *   "outboundArrivalDatetime": "outboundArrivalDatetime",
             *   "roomType": "roomType",
             *   "inboundDepartureDatetime": "2000-01-23"
             * }
             */
            Offer[];
        }
        /**
         * example:
         * {
         *   "name": "name",
         *   "id": 0.8008281904610115,
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
         *   "countChildren": 1,
         *   "inboundArrivalDatetime": "inboundArrivalDatetime",
         *   "mealType": "mealType",
         *   "outboundDepartureDatetime": "2000-01-23",
         *   "outboundDepartureAirport": "outboundDepartureAirport",
         *   "outboundArrivalAirport": "outboundArrivalAirport",
         *   "countAdults": 6,
         *   "oceanView": true,
         *   "price": 0.8008281904610115,
         *   "inboundArrivalAirport": "inboundArrivalAirport",
         *   "inboundDepartureAirport": "inboundDepartureAirport",
         *   "outboundArrivalDatetime": "outboundArrivalDatetime",
         *   "roomType": "roomType",
         *   "inboundDepartureDatetime": "2000-01-23"
         * }
         */
        export interface Offer {
            price: number;
            countAdults: number;
            countChildren: number;
            inboundDepartureAirport: string;
            inboundDepartureDatetime: string; // date
            inboundArrivalAirport: string;
            inboundArrivalDatetime: string; // datetime
            outboundDepartureAirport: string;
            outboundDepartureDatetime: string; // date
            outboundArrivalAirport: string;
            outboundArrivalDatetime: string; // datetime
            mealType: string;
            oceanView: boolean;
            roomType: string;
        }
        /**
         * OutboundDepartureAirports
         */
        export type OutboundDepartureAirports = string[];
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
            export type Reverse = boolean;
            export type SortBy = "" | "stars" | "price";
        }
        export interface QueryParameters {
            earliestDepartureDate: Parameters.EarliestDepartureDate /* date */;
            latestReturnDate: Parameters.LatestReturnDate /* date */;
            duration: Parameters.Duration;
            countAdults: Parameters.CountAdults;
            countChildren: Parameters.CountChildren;
            departureAirports: Parameters.DepartureAirports;
            sortBy?: Parameters.SortBy;
            reverse?: Parameters.Reverse;
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
             *     "name": "name",
             *     "id": 0.8008281904610115,
             *     "stars": 6.027456183070403
             *   },
             *   "items": [
             *     {
             *       "countChildren": 1,
             *       "inboundArrivalDatetime": "inboundArrivalDatetime",
             *       "mealType": "mealType",
             *       "outboundDepartureDatetime": "2000-01-23",
             *       "outboundDepartureAirport": "outboundDepartureAirport",
             *       "outboundArrivalAirport": "outboundArrivalAirport",
             *       "countAdults": 6,
             *       "oceanView": true,
             *       "price": 0.8008281904610115,
             *       "inboundArrivalAirport": "inboundArrivalAirport",
             *       "inboundDepartureAirport": "inboundDepartureAirport",
             *       "outboundArrivalDatetime": "outboundArrivalDatetime",
             *       "roomType": "roomType",
             *       "inboundDepartureDatetime": "2000-01-23"
             *     },
             *     {
             *       "countChildren": 1,
             *       "inboundArrivalDatetime": "inboundArrivalDatetime",
             *       "mealType": "mealType",
             *       "outboundDepartureDatetime": "2000-01-23",
             *       "outboundDepartureAirport": "outboundDepartureAirport",
             *       "outboundArrivalAirport": "outboundArrivalAirport",
             *       "countAdults": 6,
             *       "oceanView": true,
             *       "price": 0.8008281904610115,
             *       "inboundArrivalAirport": "inboundArrivalAirport",
             *       "inboundDepartureAirport": "inboundDepartureAirport",
             *       "outboundArrivalDatetime": "outboundArrivalDatetime",
             *       "roomType": "roomType",
             *       "inboundDepartureDatetime": "2000-01-23"
             *     }
             *   ]
             * }
             */
            Components.Schemas.GetHotelOffersResponse;
        }
    }
    namespace GetOutboundDepartureAirports {
        namespace Responses {
            export type $200 = /* OutboundDepartureAirports */ Components.Schemas.OutboundDepartureAirports;
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
  /**
   * get_outbound_departure_airports - get all outbound departure airports
   */
  'get_outbound_departure_airports'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetOutboundDepartureAirports.Responses.$200>
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
  ['/outboundDepartureAirports']: {
    /**
     * get_outbound_departure_airports - get all outbound departure airports
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetOutboundDepartureAirports.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
