const ReviewCard = ({ img, name, username, body }) => {
 
    return (
      <figure
        className="relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4"
      >
        <div className="flex flex-row items-center gap-2">
          <img className="rounded-full" width="32" height="32" alt="" src={img} />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-gray-700">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
    )
  }

  export default ReviewCard