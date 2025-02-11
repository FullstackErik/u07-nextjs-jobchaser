import TextField from '@mui/material/TextField';

type SearchBarProps = {
    searchTerm: string,
    handleSearchTerm(e: React.ChangeEvent<HTMLInputElement>) : void
}

function SearchBar({searchTerm, handleSearchTerm}: SearchBarProps) {

    return (
        
            <TextField
                sx={{maxWidth: "250px", margin: "5%"}}
                label="Sök jobb"
                type="text"
                value={searchTerm}
                onChange={handleSearchTerm}
            />
        
    )
}

export default SearchBar;