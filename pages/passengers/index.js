import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Router, { withRouter } from 'next/router';
import Link from 'next/link';

const Passengers = (props) => {
  const [isLoading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  useEffect(() => {
    //After the component is mounted set router event handlers
    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', stopLoading);
    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', stopLoading);
    };
  }, []);
  //When new page selected in paggination, we take current path and query parrams.
  // Then add or modify page parram and then navigate to the new route.
  const paginationHandler = (page) => {
    const currentPath = props.router.pathname;
    const currentQuery = props.router.query;
    currentQuery.page = page.selected + 1;
    // props.router.push({
    //   pathname: currentPath,
    //   query: currentQuery,
    // });
  };

  const { country, name, id } = props.data.data.airline[0];

  //Conditional rendering of the posts list or loading indicator
  let content = null;
  if (isLoading) content = <div>Loading...</div>;
  else {
    const hrf = `/passengers/${id}`;
    content = (
      <div>
        <h3>{country}</h3>
        <Link href={hrf}>
          <h3>{name}</h3>
        </Link>
        <hr />
      </div>
    );
  }

  return (
    <div className='container'>
      <h1>Posts List with Pagination in Next.js</h1>
      <div className='posts'>{content}</div>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        activeClassName={'active'}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        initialPage={props.currentPage}
        pageCount={props.pageCount}
        // marginPagesDisplayed={2}
        // pageRangeDisplayed={5}
        onPageChange={paginationHandler}
      />
    </div>
  );
};

// Passengers.getInitialProps = async ({ query }) => {
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

export default withRouter(Passengers);

// export const getServerSideProps = async () => {
//   try {
//     const page = query.page || 1;
//     console.log(44444);
//     const response = await axios.get(
//       `https://api.instantwebtools.net/v1/passenger?page=${0}&size=1`,
//     );
//     console.log(response, 555);
//     return {
//       props: {
//         data: {
//           totalCount: response.data.totalPassengers,
//           pageCount: response.data.totalPages,
//           currentPage: response.data.totalPages,
//           perPage: 1,
//           data: response.data.data[0],
//         },
//       },
//     };
//   } catch {
//     res.statusCode = 404;
//     return {
//       props: {},
//     };
//   }
// };

export async function getServerSideProps(context) {
  const res = await axios.get(`https://api.instantwebtools.net/v1/passenger?page=${0}&size=1`);
  if (!res) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: {
        totalCount: res.data.totalPassengers,
        pageCount: res.data.totalPages,
        currentPage: res.data.totalPages,
        perPage: 1,
        data: res.data.data[0],
      },
    },
  };
}
