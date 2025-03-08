"use client";

import SearchBar from "../_components/SearchBar";
import { useState, useEffect } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Typography, InputLabel, MenuItem, FormControl, Select, Button } from '@mui/material';
import Grid from "@mui/material/Grid2";
import Loader from "../_components/Loader";
import JobItem from "../_components/JobItem";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { updatePlace, updatePosition } from "../redux/slices/jobFilterSlice";
import { ArrowForwardIos, ArrowBackIosNew } from "@mui/icons-material";


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
    const [firstIndex , setFirstIndex] = useState<number>(0);
    const [secondIndex , setSecondIndex] = useState<number>(20);
    const jobState = useSelector((state: RootState) => state.jobsSelection);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchJobs() {
            const url = "https://jobsearch.api.jobtechdev.se/search?q=javascript&limit=100";
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
        setFirstIndex(0)
        setSecondIndex(20)
    };
    
    const reducedJobs = jobs.filter(({ occupation, workplace_address }) => {
        const municipality = workplace_address.municipality ? workplace_address.municipality.toLowerCase() : "";
        const position = occupation.label ? occupation.label.toLowerCase() : "";

        return (municipality.includes(jobState.place.toLowerCase()) && position.includes(jobState.position.toLowerCase()));
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
    
    const currentPageJobs = [...filteredJobs].slice(firstIndex, secondIndex)
    let sida;
    switch (firstIndex) {
        case 0:
            sida = 1
            break;
        case 20:
            sida = 2
            break;
        case 40:
            sida = 3
            break;
        case 60:
            sida = 4
            break;
        case 80:
            sida = 5
            break;
        default:
            break;
    }
    
    return (
        <>
            <CssBaseline />
            <Container maxWidth={false} sx={{ display: "flex", flexDirection: "column", alignItems: "center", m: "2% 0"}}>
                <SearchBar searchTerm={searchTerm} handleSearchTerm={handleOnChange} />
                <div>
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <InputLabel id="place-label">Plats</InputLabel>
                        <Select
                            labelId="place-label"
                            id="place"
                            value={jobState.place}
                            onChange={(e) => {
                                dispatch(updatePlace(e.target.value))
                                setFirstIndex(0)
                                setSecondIndex(20)
                            }
                            }
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
                            onChange={(e) => {
                                dispatch(updatePosition(e.target.value))
                                setFirstIndex(0)
                                setSecondIndex(20)
                            }}
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
                {(searchTerm || jobState.place || jobState.position) && <Button onClick={()=>{dispatch(updatePlace("")); dispatch(updatePosition("")); setSearchTerm("")}}>Rensa Filter</Button>}
            </Container>
            {isLoading ? <Loader /> :
                currentPageJobs.length > 0 ?
                    <Grid container sx={{ m: "0 auto", marginBottom: 10, justifyContent: "center", width: "80vw" }} spacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
                        {currentPageJobs.map(({ id, employer, logo_url, headline, workplace_address, occupation, webpage_url }) =>
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
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem", marginBottom: "20px"}}>
                <Button disabled={firstIndex === 0} variant="contained" onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                    setFirstIndex(i => i - 20); 
                    setSecondIndex(i => i - 20);
                }}><ArrowBackIosNew/></Button>
                <Typography variant="h6">page {sida} / {Math.ceil(filteredJobs.length / 20)}</Typography>
                <Button disabled={secondIndex >= filteredJobs.length} variant="contained" onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                    setFirstIndex(i => i + 20); 
                    setSecondIndex(i => i + 20);
                }}
                ><ArrowForwardIos/></Button>
            </div>
        </>
    );
}