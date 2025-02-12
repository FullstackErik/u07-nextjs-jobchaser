"use client";

import SearchBar from "../_components/SearchBar";
import { useState, useEffect } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Loader from "../_components/Loader";
import JobItem from "../_components/JobItem";

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



    useEffect(() => {
        async function fetchJobs() {
            const url = "https://jobsearch.api.jobtechdev.se/search?q=fullstack&municipalities=0180&limit=20";
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
    }
    // console.log(jobs)
    const filteredJobs = jobs.filter(({ headline, employer, workplace_address, occupation }) => {
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
                    <Typography variant="h3" style={{textAlign: "center"}}>Inga jobb att visa</Typography>
            }
        </>
    );
}