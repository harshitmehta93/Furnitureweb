import React from "react";
import Bannerimg from "../assests/images/couch.png"

const Banner = () => {
    return(
        <>
			<div class="hero">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-lg-5">
							<div class="intro-excerpt">
								<h1>Modern Interior <span clsas="d-block">Design Studio</span></h1>
								<p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p><a class="btn btn-secondary me-2">Shop Now</a><a class="btn btn-white-outline">Explore</a></p>
							</div>
						</div>
						<div class="col-lg-7">
							<div class="hero-img-wrap">
								<img src={Bannerimg} class="img-fluid" alt="banner-img"/>
							</div>
						</div>
					</div>
				</div>
			</div>
        </>
    )
}
export default Banner;