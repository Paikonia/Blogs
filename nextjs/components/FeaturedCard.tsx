type FeaturedCardProps = { href: string; imgSrc: string; title: string };

const FeaturedCard = ({ href, title, imgSrc }: FeaturedCardProps) => {
  return (
    <div className="feature-card__card">
      <a className="feature-card__link" href={href}>
        <div className="featured-card__content">
          <h3 className="feature-card__title">{title}</h3>

          <img
            className="feature-card__img"
            src={imgSrc}
            alt={title}
            width="780"
            height="585"
            decoding="async"
          />
        </div>
      </a>
    </div>
  );
};

export default FeaturedCard;
