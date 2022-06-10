import { SearchContainer } from "./styles";

export default function SearchLocalInput(){
  return(
      <SearchContainer>
        <input type="text" placeholder="Search a location"/>
        <button>Search</button>
      </SearchContainer>
  )
}
