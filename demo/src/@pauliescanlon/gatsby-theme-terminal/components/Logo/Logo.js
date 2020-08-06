/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"

export const Logo = () => (
  <GatsbyLink to="/">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 25"
      width="96"
      height="25"
      style={{ marginTop: 4 }}
    >
      <g>
        <path
          sx={{ fill: "success" }}
          d="M2.6,12.5c0-5.1,4.2-9.4,9.4-9.4l0,0V0.5c-3,0-5.6,1-7.8,2.9c-5,4.4-5.5,11.9-1.2,16.9l2-1.7
	C3.5,17,2.6,14.8,2.6,12.5z"
        />
        <path
          sx={{ fill: "secondary" }}
          d="M12,21.9c-2.8,0-5.4-1.2-7.1-3.2l-2,1.7c0.4,0.5,0.9,0.9,1.4,1.3c5,4.3,12.6,3.6,16.8-1.5l-2-1.7
	C17.4,20.6,14.8,21.9,12,21.9z"
        />
        <path
          sx={{ fill: "primary" }}
          d="M12,0.5v2.6c5.1,0,9.4,4.2,9.4,9.4c0,2.3-0.8,4.4-2.2,6l2,1.7c1.9-2.3,2.8-4.7,2.8-7.7
	C23.9,5.9,18.6,0.5,12,0.5z"
        />

        <path
          sx={{ fill: "text" }}
          d="M11.3,16V9.9h-2V8.8h5.3v1.1h-2V16H11.3z"
        />
      </g>

      <g>
        <path
          sx={{ fill: "text" }}
          d="M32.4,18.5V9.6h-2.9V8h7.8v1.7h-3v8.9H32.4z"
        />
        <path
          sx={{ fill: "text" }}
          d="M40.2,18.3c-0.6-0.3-1.1-0.8-1.4-1.4c-0.3-0.6-0.5-1.4-0.5-2.2c0-0.9,0.2-1.6,0.5-2.2c0.3-0.6,0.8-1.1,1.3-1.5
		s1.2-0.5,1.9-0.5c0.6,0,1.2,0.1,1.7,0.4c0.5,0.3,0.9,0.7,1.2,1.3c0.3,0.6,0.4,1.3,0.4,2.1c0,0.1,0,0.3,0,0.6l0,0.2h-5.2
		c0.1,0.7,0.3,1.3,0.7,1.6c0.4,0.4,0.8,0.6,1.3,0.6c0.4,0,0.7-0.1,1.1-0.3c0.4-0.2,0.7-0.4,0.9-0.7l1.1,1.1c-0.8,1-1.8,1.4-3,1.4
		C41.5,18.8,40.8,18.7,40.2,18.3z M43.5,13.7c0-0.3-0.1-0.6-0.2-0.9c-0.1-0.3-0.3-0.5-0.6-0.7c-0.2-0.2-0.5-0.3-0.8-0.3
		c-0.5,0-0.8,0.2-1.2,0.5c-0.3,0.3-0.5,0.8-0.5,1.3H43.5z"
        />
        <path
          sx={{ fill: "text" }}
          d="M53.3,13L53.3,13c-0.2-0.4-0.4-0.6-0.7-0.7c-0.2-0.1-0.5-0.2-0.9-0.2c-0.4,0-0.8,0.1-1.1,0.3
		c-0.3,0.2-0.6,0.5-0.8,0.8s-0.3,0.8-0.3,1.2v4.1h-1.9v-7.9h2v1.1c0.2-0.4,0.5-0.7,0.9-1c0.4-0.2,0.9-0.3,1.4-0.3
		c0.4,0,0.8,0.1,1.2,0.2c0.4,0.1,0.7,0.4,1,0.7L53.3,13z M53,13C53,13,53,13,53,13C53.1,13,53.1,13,53,13c0.1,0.1,0.2,0.1,0.2,0.1
		l0,0L53,13L53,13z M53.3,13c0,0.1,0,0.1,0,0.1c0,0,0,0,0,0C53.3,13.2,53.3,13.1,53.3,13L53.3,13z"
        />
        <path
          sx={{ fill: "text" }}
          d="M55.2,10.5h1.6V11c0.2-0.2,0.4-0.4,0.6-0.6c0.2-0.1,0.5-0.2,0.8-0.2c0.3,0,0.5,0.1,0.8,0.2
		c0.2,0.1,0.4,0.4,0.6,0.7c0.2-0.3,0.4-0.6,0.7-0.7c0.2-0.2,0.6-0.2,0.9-0.2c0.6,0,1,0.2,1.2,0.6c0.2,0.4,0.4,1,0.4,1.8v5.9H61V13
		c0-0.4,0-0.8-0.1-0.9s-0.2-0.3-0.4-0.3c-0.4,0-0.6,0.5-0.6,1.6v5.2h-1.7v-5.4c0-0.5,0-0.9-0.1-1s-0.2-0.3-0.4-0.3
		c-0.2,0-0.4,0.1-0.5,0.3c-0.1,0.2-0.2,0.6-0.2,1.2v5.3h-1.7V10.5z"
        />
        <path
          sx={{ fill: "text" }}
          d="M64.6,18.5V17h1.9v-4.9h-1.8v-1.5h3.7V17h1.7v1.5H64.6z M66.8,9.1c-0.2-0.1-0.3-0.2-0.4-0.4
		c-0.1-0.2-0.2-0.4-0.2-0.6c0-0.3,0.1-0.6,0.3-0.8C66.7,7.1,67,7,67.4,7C67.6,7,67.8,7,68,7.2c0.2,0.1,0.3,0.2,0.4,0.4
		c0.1,0.2,0.2,0.4,0.2,0.6c0,0.2-0.1,0.4-0.2,0.6C68.3,8.9,68.2,9,68,9.1c-0.2,0.1-0.4,0.2-0.6,0.2C67.2,9.2,67,9.2,66.8,9.1z"
        />
        <path
          sx={{ fill: "text" }}
          d="M72.6,10.6h1.9v0.8c0.3-0.3,0.6-0.6,1-0.7c0.4-0.2,0.8-0.3,1.3-0.3c0.8,0,1.4,0.3,1.8,0.8
		c0.5,0.5,0.7,1.4,0.7,2.5v4.8h-1.9v-4.8c0-0.6-0.1-1-0.3-1.3c-0.2-0.3-0.5-0.4-1-0.4c-0.3,0-0.5,0.1-0.8,0.2s-0.4,0.3-0.6,0.5
		s-0.2,0.5-0.2,0.8v5.1h-1.9V10.6z"
        />
        <path
          sx={{ fill: "text" }}
          d="M86.7,11.1c0.6,0.5,0.9,1.4,0.9,2.6v4.8h-1.8v-0.7c-0.3,0.3-0.7,0.5-1.1,0.7c-0.4,0.2-0.9,0.2-1.4,0.2
		c-0.8,0-1.5-0.2-1.9-0.6c-0.4-0.4-0.6-1-0.6-1.7c0-0.6,0.2-1,0.5-1.4s0.9-0.7,1.5-0.9c0.7-0.2,1.5-0.3,2.4-0.3h0.6
		c-0.1-0.7-0.2-1.2-0.5-1.5c-0.3-0.3-0.7-0.4-1.3-0.4c-0.4,0-0.7,0.1-1.1,0.3c-0.4,0.2-0.8,0.5-1.1,0.8l-1-1.3c0.5-0.5,1-0.8,1.6-1
		c0.6-0.2,1.1-0.3,1.7-0.3C85.2,10.4,86.1,10.6,86.7,11.1z M85.3,16.8c0.3-0.4,0.5-0.9,0.6-1.7h-0.4c-1,0-1.7,0.1-2.1,0.3
		s-0.7,0.5-0.7,1c0,0.3,0.1,0.5,0.3,0.7c0.2,0.1,0.5,0.2,0.9,0.2C84.5,17.3,85,17.1,85.3,16.8z"
        />
        <path
          sx={{ fill: "text" }}
          d="M89.7,18.5v-1.5h2.2V8.6h-2.1V7.1h4v10H96v1.5H89.7z"
        />
      </g>
    </svg>
  </GatsbyLink>
)
