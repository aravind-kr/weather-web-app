import { ChakraProvider } from '@chakra-ui/react';

import theme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
      <style global jsx>{`
        @media screen and (max-width: 40em) {
          table.chakra-table,
          .chakra-table thead,
          .chakra-table tbody,
          .chakra-table th,
          .chakra-table td,
          .chakra-table tr {
            display: block;
          }

          .chakra-table thead tr {
            position: absolute;
            top: -9999px;
            left: -9999px;
          }

          .chakra-table tbody tr {
            padding: 0.25em;
          }

          .chakra-table td .td:before {
            position: absolute;
            display: block;
            left: 1rem;
            width: calc(50% - 20px);
            white-space: pre-wrap;
            overflow-wrap: break-word;
            text-align: left !important;
            font-weight: 600;
          }
        }
      `}</style>
    </ChakraProvider>
  );
}

export default MyApp;
