// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import axios from 'axios';

// export default function Home() {
//   // https://api.instantwebtools.net/v1/passenger?page=0&size=10
//   // const res = axios.get(`https://api.instantwebtools.net/v1/passenger?page=0&size=10`);

//   const { locale, locales } = useRouter();

//   return (
//     <div>
//       <nav>
//         <ul>
//           {locales.map((loc) => (
//             <li key={loc}>
//               <Link href='' locale={loc}>
//                 <a>{loc}</a>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//       <h1>Current locale - {locale}</h1>
//     </div>
//   );
// }

// import Link from 'next/link';
// import Router from 'next/router';
// import fetch from 'isomorphic-unfetch';
// import React from 'react';
// import axios from 'axios';

// export default class App extends React.Component {
//   static async getInitialProps({ query: { page = 1 } }) {
//     // const r = await fetch(
//     //   `https://chroniclingamerica.loc.gov/search/titles/results/?terms=michigan&format=json&page=${page}`,
//     // );
//     const r = await axios.get(`https://api.instantwebtools.net/v1/passenger?page=0&size=${page}`);

//     console.log(r, 123);
//     const d = await r.json();
//     return {
//       items: d.items,
//       page: parseInt(page, 10),
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>nesto</h1>
//         {/* <ul>
//           {this.props.items.map(({ title, id }) => (
//             <li key={id}>{title}</li>
//           ))}
//         </ul>
//         <button
//           onClick={() => Router.push(`/?page=${this.props.page - 1}`)}
//           disabled={this.props.page <= 1}
//         >
//           PREV
//         </button>
//         <button onClick={() => Router.push(`/?page=${this.props.page + 1}`)}>NEXT</button>
//         <Link href='/?page=1'>
//           <a>First page</a>
//         </Link> */}
//       </div>
//     );
//   }
// }

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ReactPaginate from 'react-paginate';
// import Router, { withRouter } from 'next/router';
// import Link from 'next/link';
// // // import '../assets/styles.scss';

// const Home = (props) => {
//   const [isLoading, setLoading] = useState(false); //State for the loading indicator
//   const startLoading = () => setLoading(true);
//   const stopLoading = () => setLoading(false);

//   /*
//     			Posts fetching happens after page navigation,
//     			so we need to switch Loading state on Router events.
//     		*/
//   useEffect(() => {
//     //After the component is mounted set router event handlers
//     Router.events.on('routeChangeStart', startLoading);
//     Router.events.on('routeChangeComplete', stopLoading);

//     return () => {
//       Router.events.off('routeChangeStart', startLoading);
//       Router.events.off('routeChangeComplete', stopLoading);
//     };
//   }, []);

//   //When new page selected in paggination, we take current path and query parrams.
//   // Then add or modify page parram and then navigate to the new route.
//   const pagginationHandler = (page) => {
//     const currentPath = props.router.pathname;
//     const currentQuery = props.router.query;
//     currentQuery.page = page.selected + 1;

//     // props.router.push({
//     //   pathname: currentPath,
//     //   query: currentQuery,
//     // });
//   };

//   //Conditional rendering of the posts list or loading indicator
//   let content = null;
//   if (isLoading) content = <div>Loading...</div>;
//   else {
//     //Generating posts list
//     content = (
//       <div>
//         <h3>{props.data.airline[0].country}</h3>

//         <Link href='/passengers'>
//           <h3>{props.data.airline[0].name}</h3>
//         </Link>

//         <hr />
//       </div>
//     );
//   }
//   console.log(props.currentPage);

//   return (
//     <div className='container'>
//       <h1>Posts List with Pagination in Next.js</h1>
//       <div className='posts'>{content}</div>

//       <ReactPaginate
//         previousLabel={'previous'}
//         nextLabel={'next'}
//         breakLabel={'...'}
//         breakClassName={'break-me'}
//         activeClassName={'active'}
//         containerClassName={'pagination'}
//         subContainerClassName={'pages pagination'}
//         // initialPage={props.currentPage}
//         // pageCount={props.pageCount}
//         // marginPagesDisplayed={2}
//         // pageRangeDisplayed={5}
//         onPageChange={pagginationHandler}
//       />
//     </div>
//   );
// };

// //Fetching posts in get Initial Props to make the app seo friendly
// Home.getInitialProps = async ({ query }) => {
//   const page = query.page || 1; //if page empty we request the first page
//   const response = await axios.get(
//     // `https://gorest.co.in/public-api/posts?_format=json&access-token=cxzNs8fYiyxlk708IHfveKM1z1xxYZw99fYE&page=${page}`,
//     `https://api.instantwebtools.net/v1/passenger?page=${0}&size=1`,
//   );

//   return {
//     totalCount: response.data.totalPassengers,
//     pageCount: response.data.totalPages,
//     currentPage: response.data.totalPages,
//     perPage: 1,
//     data: response.data.data[0],
//   };
// };

// export default withRouter(Home);

import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Passengers() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Link href='/passengers'>Passengers</Link>
    </div>
  );
}
