import React from 'react'
import { Container, Jumbotron } from 'reactstrap'
import NavbarBasic from '../Navbars/NavbarBasic'
import SimpleFooter from '../Footers/SimpleFooter'
import JumbotronBasic from '../Jumbotrons/JumbotronBasic'
import ReactHookForm from './ReactHookForm'
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import JumbotronFluid from "components/Jumbotrons/JumbotronFluid";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     margin: theme.spacing(3, 0, 2),
//     fontFamily: "Roboto",
//     textAlign: "center",
//     fontSize: "40px",
//     color: "",
//     textShadow: "1px 1px darkmagenta",
//   },
// }));

export const QuoteFormHeader = (props) => {
	// const styles = useStyles();

	return (
		<>
			<NavbarBasic />
			<JumbotronBasic />
		</>
	)
}

export default QuoteFormHeader