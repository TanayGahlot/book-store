import React, { lazy, Suspense } from 'react';
import { DisplayBookCard } from './DisplayBookCard';
const DisplayRemainingBooks = lazy(() => import('./DisplayRemainingBooks'), 'default')
const DisplayBooks = (props) => {
    return (
        <>
            {props.books.slice(0, 12).map(DisplayBookCard)}
            <Suspense fallback={<h3>Still Loading…</h3>}>
                <DisplayRemainingBooks books={props.books.slice(12, props.books.length).map(DisplayBookCard)} />
            </Suspense>
        </>
    );
}
export default DisplayBooks;

