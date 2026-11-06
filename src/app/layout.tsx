import type {Metadata} from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DeveloperProfileBadge from '@/components/DeveloperProfileBadge';
import DeploymentRefresh from '@/components/DeploymentRefresh';
import '@/styles/globals.css';
import '@/styles/academy.css';
import '@/styles/updates-bar.css';
import '@/styles/developer-badge.css';
export const metadata:Metadata={title:{default:'The University of Chenab | Independent Website Concept',template:'%s | University of Chenab Concept'},description:'Explore verified University of Chenab study options, admissions resources and campus information. Independent website concept.',robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body id="top"><a className="skip" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/><DeveloperProfileBadge/><DeploymentRefresh/></body></html>}
