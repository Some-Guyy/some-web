import { Container, Row, Text } from '@nextui-org/react';
import { v4 as uuidv4 } from 'uuid';
import licenseData from '../assets/data/licenses.json';

const Licenses = () => {
    const licenseArray = Object.keys(licenseData).map(key => [key, licenseData[key]]); // Convert JSON data into array
    return (
        <Container fluid>
            <Row justify='center'>
                {/* Place licenses here that aren't in licenseData, which are usually licenses outside of node_modules. */}
                <Text>
                    License
                    The MIT License (MIT)

                    Copyright (c) 2015-2021 Aniket Suvarna

                    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

                    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

                    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </Text>
            </Row>
            {
                licenseArray.map(item => (
                    <Row key={uuidv4()} justify='center'><Text key={uuidv4()}>{item[1]['licenseText']}</Text></Row>
                ))
            }
        </Container>
    )
}

export default Licenses;
