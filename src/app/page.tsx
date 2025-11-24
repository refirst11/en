import { Metadata } from 'next';
import generateSEOData from 'lib/generateSEOData';
import { JSX } from 'react';

export const metadata: Metadata = generateSEOData({ title: 'Refirst 11' });

const Page = (): JSX.Element => <></>;

export default Page;
