import React from 'react';
import { Row, Text, Link, Spacer } from '@nextui-org/react';
import { v4 as uuidv4 } from 'uuid';
import licenseData from '../assets/data/licenses.json';

const Licenses = ({ brandColorStrict }) => {
    // Place licenses that aren't in node modules into this array manually.
    const licenseArray = [
        {
            name: 'Box Icons',
            repository: 'https://github.com/atisawd/boxicons',
            license: `License
            The MIT License (MIT)
    
            Copyright (c) 2015-2021 Aniket Suvarna
    
            Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
            The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
            THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
        }
    ]
    // Convert JSON data into array to map into the page.
    const npmLicenseArray = Object.keys(licenseData).map(key => [key, licenseData[key]]);

    return (
        <>
            {
                licenseArray.map(library => (
                    <React.Fragment key={uuidv4()}>
                        <Row key={uuidv4()}><Link key={uuidv4()} color={brandColorStrict} href={library['repository']} target='_blank'>{library['name']}</Link></Row>
                        <Row key={uuidv4()}><Text key={uuidv4()}>{library['license']}</Text></Row>
                        <Spacer key={uuidv4()} y={0.5} />
                    </React.Fragment>
                ))
            }
            {
                npmLicenseArray.map(item => (
                    <React.Fragment key={uuidv4()}>
                        <Row key={uuidv4()}><Link key={uuidv4()} color={brandColorStrict} href={item[1]['repository']} target='_blank'>{item[0]}</Link></Row>
                        <Row key={uuidv4()}><Text key={uuidv4()}>{item[1]['licenseText']}</Text></Row>
                        <Spacer key={uuidv4()} y={0.5} />
                    </React.Fragment>
                ))
            }
        </>
    )
}

export default Licenses;
