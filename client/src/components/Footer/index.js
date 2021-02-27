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
			<h4 style={styles.foot}>Only Syms</h4>
		</div>
	</footer>
);

export default Footer;