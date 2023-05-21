"use client";

import SearchForm from "@/app/components/SearchForm/SearchForm";
import {Stack, Typography, Button} from "@mui/material";
import Hotel from "@/app/components/Hotel/Hotel";
import {OpenAPIClientAxios} from "openapi-client-axios";
import {Client, Components, Paths} from "@/app/types/openapi";
import {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter, useSearchParams} from "next/navigation";
import BestHotelOffer = Components.Schemas.BestHotelOffer;
import {GetBestOffersByHotelFromQuery, GetBestOffersByHotelToQuery} from "@/app/types/converter";
import SortBy = Paths.GetBestOffersByHotel.Parameters.SortBy;
import QueryParameters = Paths.GetBestOffersByHotel.QueryParameters;

export default function HomePage() {
    const [offers, setOffers] = useState<BestHotelOffer[]>([]);
    const [showMoreButton, setShowMoreButton] = useState(true);
    const [loading, setLoading] = useState(true)
    const [queryParameters, setQueryParameters] = useState<
        Paths.GetBestOffersByHotel.QueryParameters>();
    const size = 10;
    const router = useRouter();
    const query = useSearchParams();
    const [currentOffset, setCurrentOffset] = useState(0)

    // update the search form and automatically load offers if a search is existing
    useEffect(() => {
        const parameters = GetBestOffersByHotelFromQuery(query);
        // parameters should be validated here, but as this is a just a very simple implementation we skip this for now
        if (parameters.earliestDepartureDate == null) {
            return;
        }

        load(parameters, 0).catch(console.error);
    }, []);


    async function onSubmitSearchForm(departureAirports: string[], countAdults: number, countChildren: number, duration: number, earliestDeparture: string, latestReturn: string, sortBy: SortBy, reverse: boolean) {
        const parameters: Paths.GetBestOffersByHotel.QueryParameters = {
            earliestDepartureDate: earliestDeparture,
            latestReturnDate: latestReturn,
            countAdults: countAdults,
            countChildren: countChildren,
            departureAirports: departureAirports,
            duration: duration,
            sortBy: sortBy,
            reverse: reverse
        };

        setOffers([])
        setCurrentOffset(0)

        await load(parameters, 0);
    }

    async function load(parameters: QueryParameters, offset: number) {
        setLoading(true)

        setQueryParameters(parameters);
        router.push("/?" + GetBestOffersByHotelToQuery(parameters));

        const api = new OpenAPIClientAxios({
            definition: "http://localhost:8090/openapi.json",
            axiosConfigDefaults: {
                withCredentials: true,
                baseURL: "http://localhost:8090",
                paramsSerializer: {indexes: null},
            },
        });
        const client = await api.init<Client>();

        const response = await client.get_best_offers_by_hotel({
            ...parameters,
            offset: offset,
            size: size
        });
        const newOffers = response.data;

        setOffers((prevOffers) => [...prevOffers, ...newOffers]);

        if (newOffers.length === 0) {
            setShowMoreButton(false);
        }

        setLoading(false)

    }

    return (
        <>
            <Typography sx={{mb: "50px", mt: "40px"}} variant="h3">CHECK24 Holiday Challenge</Typography>
            <SearchForm submitCallback={onSubmitSearchForm}/>
            <Typography variant="h4" sx={{mt: "60px", mb: "30px"}}>Hotels for your Mallorca-Trip:</Typography>
            <Stack gap={3}>
                {!loading && offers.length === 0 ? (
                    <div>We are sorry. There do not exist any offer for your request. :(</div>
                ) : (
                    offers.map((offer) => (
                        <Link
                            key={offer.hotel.id}
                            href={{
                                pathname: "/offers",
                                query: {...queryParameters, hotelId: offer.hotel.id},
                            }}
                            style={{textDecoration: "none"}}
                        >
                            <Hotel offer={offer}/>
                        </Link>
                    ))
                )}

                <Button disabled={showMoreButton} onClick={() => {
                    setCurrentOffset(currentOffset + 10);
                    load(queryParameters as QueryParameters, currentOffset + 10);
                }}>
                </Button>
            </Stack>
        </>
    )
}