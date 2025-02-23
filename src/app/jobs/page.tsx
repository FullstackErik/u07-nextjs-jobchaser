"use client";

import SearchBar from "../_components/SearchBar";
import { useState, useEffect } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import Grid from "@mui/material/Grid2";
import Loader from "../_components/Loader";
import JobItem from "../_components/JobItem";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { updatePlace, updatePosition } from "../redux/slices/jobFilterSlice";


type Job = {
    id: string,
    headline: string,
    employer: { name: string },
    logo_url: string,
    workplace_address: { municipality: string },
    occupation: { label: string },
    employment_type: { label: string },
    webpage_url: string
}

export default function Jobs() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const jobState = useSelector((state: RootState) => state.jobsSelection);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchJobs() {
            const url = "https://jobsearch.api.jobtechdev.se/search?q=fullstack&municipalities=0180&limit=50";
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Error fetching jobs! " + response.status)
                }
                const data = await response.json();
                setIsLoading(false);
                setJobs(Array.isArray(data.hits) ? data.hits : []);
            }
            catch (error) {
                console.log(error);
            }
        }

        fetchJobs();

    }, []);


    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    };
    console.log(jobs);

    const reducedJobs = jobs.filter(({ occupation, workplace_address }) => {
        return workplace_address.municipality.toLowerCase().includes(jobState.place) && occupation.label.toLowerCase().includes(jobState.position)
    });

    const filteredJobs = reducedJobs.filter(({ headline, employer, workplace_address, occupation }) => {
        const search = searchTerm.toLowerCase();
        return (
            headline?.toLowerCase().includes(search) ||
            employer?.name?.toLowerCase().includes(search) ||
            workplace_address?.municipality?.toLowerCase().includes(search) ||
            occupation?.label?.toLowerCase().includes(search)
        )
    })
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" disableGutters sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <SearchBar searchTerm={searchTerm} handleSearchTerm={handleOnChange} />
            </Container>
            <div>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="place-label">Plats</InputLabel>
                    <Select
                        labelId="place-label"
                        id="place"
                        value={jobState.place}
                        onChange={(e) => dispatch(updatePlace(e.target.value))}
                        autoWidth
                        label="Plats"
                    >
                        <MenuItem value="">
                            <em>Alla</em>
                        </MenuItem>
                        <MenuItem value="stockholm">Stockholm</MenuItem>
                        <MenuItem value="norrköping">Norrköping</MenuItem>
                        <MenuItem value="göteborg">Göteborg</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="position-label">Yrke</InputLabel>
                    <Select
                        labelId="position-label"
                        id="position"
                        value={jobState.position}
                        onChange={(e) => dispatch(updatePosition(e.target.value))}
                        autoWidth
                        label="Yrke"
                    >
                        <MenuItem value="">
                            <em>Alla</em>
                        </MenuItem>
                        <MenuItem value="mjukvaruutvecklare">Mjukvaruutvecklare</MenuItem>
                        <MenuItem value="systemutvecklare">Systemutvecklare</MenuItem>
                    </Select>
                </FormControl>
            </div>
            {isLoading ? <Loader /> :
                filteredJobs.length > 0 ?
                    <Grid container sx={{ m: "0 auto", marginBottom: 10, justifyContent: "center", width: "80vw" }} spacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
                        {filteredJobs.map(({ id, employer, logo_url, headline, workplace_address, occupation, webpage_url }) =>
                            <JobItem
                                key={id}
                                company={employer.name}
                                logo={logo_url}
                                position={headline}
                                location={workplace_address.municipality}
                                level={occupation.label}
                                website={webpage_url}
                            />
                        )}
                    </Grid> :
                    <Typography variant="h3" style={{ textAlign: "center" }}>Inga jobb att visa</Typography>
            }
        </>
    );
}