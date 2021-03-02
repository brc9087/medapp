import React from "react";

const styles = {
	foot: {
		backgroundColor: "navy",
		color: "white"
	}
}

const Footer = () => (
	<footer style={styles.foot} className="page-footer">
		<div className="container-fluid text-center">
		<small style={styles.foot}>OnlySymps (2021) &copy; copyright reserved</small>
		</div>
	</footer>
);

export default Footer;