import React from 'react'

export default class Sidebar extends React.Component {


    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                <div className="user-panel">
                    <div className="pull-left image">
                    <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User" />
                    </div>
                    <div className="pull-left info">
                    <p>Administracija</p>
                    <a href="#1"><i className="fa fa-circle text-success"></i>Online</a>
                    </div>
                </div>
                <form action="#1" method="get" className="sidebar-form">
                    <div className="input-group">
                    <input type="text" name="q" className="form-control" placeholder="Search..." />
                    <span className="input-group-btn">
                            <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                </form>
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="active treeview">
                            <a href="#1">
                                <i className="fa fa-user-o"></i> <span>Članovi komore</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li className="active"><a href="spisakClanova"><i className="fa fa-circle-o"></i> Spisak članova</a></li>
                                <li><a href="dodajClana"><i className="fa fa-circle-o"></i> Dodaj člana</a></li>
                            </ul>
                        </li>

                        <li className="active treeview">
                            <a href="clanoviOdbora">
                                <i className="fa fa-user"></i><span>Članovi izvršnog odbora</span>
                                    <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li className="active"><a href="clanoviOdbora"><i className="fa fa-circle-o"></i> Spisak članova</a></li>
                            </ul>
                        </li>

                        <li className="active treeview">
                            <a href="#1">
                                <i className="fa fa-user-circle"></i> <span>Članovi skupštine</span>
                                <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li className="active"><a href="index.html"><i className="fa fa-circle-o"></i> Podgorica</a></li>
                                <li><a href="clanoviSkupstineCt"><i className="fa fa-circle-o"></i> Cetinje</a></li>
                                <li><a href="clanoviSkupstineNk"><i className="fa fa-circle-o"></i> Nikšić</a></li>
                                <li><a href="clanoviSkupstineSjever"><i className="fa fa-circle-o"></i> Sjever</a></li>
                                <li><a href="clanoviSkupstineJug"><i className="fa fa-circle-o"></i> Jug</a></li>
                            </ul>
                        </li>

                        <li className="active treeview">
                            <a href="#1">
                                <i className="fa fa-user-circle"></i> <span>Vijesti</span>
                                <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li className="active"><a href="vijesti"><i className="fa fa-circle-o"></i> Pregled vijesti</a></li>
                                <li><a href="dodajVijest"><i className="fa fa-circle-o"></i> Dodaj vijest</a></li>
                            </ul>
                        </li>
                        <li className="active treeview">
                            <a href="#1">
                                <i className="fa fa-user-circle"></i> <span>Oglasi</span>
                                <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li className="active"><a href="oglasi"><i className="fa fa-circle-o"></i> Pregled oglasa</a></li>
                                <li><a href="dodajOglas"><i className="fa fa-circle-o"></i> Dodaj oglas</a></li>
                            </ul>
                        </li>
                        <li className="active treeview">
                            <a href="#1">
                                <i className="fa fa-user-circle"></i> <span>Kontakt</span>
                                <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li className="active"><a href="kontakt"><i className="fa fa-circle-o"></i> Podaci o firmi</a></li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </aside>
        )
    }
}