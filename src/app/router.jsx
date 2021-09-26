
import { Router } from '@reach/router'
import Navigator from '../components/layout/navigator';
import PageNotFound from '../pages/404'
import Home from '../pages/home'
import PostDetail from '../pages/home/detail';
import Author from './../pages/author';
import AuthorDetail from '../pages/author/detail'
// import Gallery from '../pages/gallery';
import Album from '../pages/album';
import AlbumDetails from '../pages/album/details';
import Todo from '../pages/todos';



function AppRouter() {
    return (
        <div className='container py-5'>
            <Navigator />
            <Router>
                <Todo path='/todo' />
                <AlbumDetails path='/album/:id/:title' />
                <Album path='/album' />
                {/* <Gallery path='/gallery' /> */}
                <AuthorDetail path='/author/:id/:name' />
                <Author path='/author' />
                <PostDetail path='/post/:id/:title' />
                <Home path='/' />
                <PageNotFound default />
            </Router>
        </div>
    )
}
export default AppRouter