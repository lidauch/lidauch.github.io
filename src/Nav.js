import React, {Component} from 'react';

class Nav extends Component {
    render() {
        const NavBox = props => {

            const names = props.pageNames.map((row, index) => {
                if(['1', '4'].indexOf(row.index) >= 0) {
                    console.log(row.index);
                    this.setState({ bool: false });
                }
                else if(['2', '3'].indexOf(row.index) <=0) {
                    this.setState({ bool: true });
                }

            //     return (
            //         <div className='navBlock' id={row.page} key={index} onMouseOver={() => this.setState({ bool: true })} onMouseOut={() => this.setState({ bool: false })}>
            //            {
            //                this.state.bool ? (
            //                    <span>[OPTION1] show after onMouseEnter</span>
            //                ) : (
            //                    <div>[OPTION2] show after onMouseLeave</div>
            //                )
            //            }
            //            <p>{row.page}</p>
            //         </div>
            //         // <div className='navBlock' id={row.page} key={index}>
            //         //     <p>{row.page}</p>
            //         // </div>
            //     )
            });
            return (
                <div id='navigation'>
                    {names}
                </div>
            );
        };

        const { pageNames } = this.props;

        return (
            <NavBox pageNames={pageNames}/>
        );
    }
}

export default Nav