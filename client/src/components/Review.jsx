import { useState } from 'react'
import { HiStar } from 'react-icons/hi'

/*
Made by: Mohammed Khaled, T#6.
Expected props:
- review.title, .count, .description, .name, .date
- reviews.average, .totalCount, .href
*/

const review = {
    title: 'Amazing, I loved it so much!',
    count: '4',
    description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    name: 'Mohammed Khaled',
    date: 'April 4, 2022',
}
const reviews = {
    average: '4',
    totalCount: '5',
    href: '#',
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Review(props) {
  console.log(props.review);
  return (
    <section>
      <div class="max-w-xl mx-4 my-8 sm:mx-6 lg:mx-8 bg-gray-100">
        <div class="grid grid-cols-1 mt-8 gap-x-16 gap-y-12">
          <blockquote>
            <span class="text-xl text-gray-900">{props.review.user.name}</span>
            <span class="text-lg text-gray-500">
              {" "}
              - {props.review.createdAt}
            </span>
            <div class="flex">
              <div className="flex items-center m-1">
                {[0, 1, 2, 3, 4].map((count) => (
                  <HiStar
                    key={count}
                    className={classNames(
                      props.review.rating > count
                        ? "text-yellow-400"
                        : "text-gray-200",
                      "h-5 w-5 flex-shrink-0"
                    )}
                  />
                ))}
              </div>
            </div>
            <p class="mt-5 text-lg sm:mt-0 text-grey-900">
              {props.review.title}
            </p>
            <p class="mt-2 text-sm text-grey-700">{props.review.body}</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}