import HeaderContent from './styles';
import { FaBook } from "react-icons/fa";

export default function Header(){
    
    return(
        <HeaderContent>
            <h1 className="headerTitle"><a href="/books"><FaBook color="white"/></a> CyberBooks</h1>
        </HeaderContent>
    )
}