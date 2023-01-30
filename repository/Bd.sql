CREATE TABLE public.geo (
    id serial,
    lat character varying(64) NOT NULL,
    lng character varying(64) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE public.company (
    id serial,
    name character varying(64) NOT NULL,
    catchPhrase character varying(64) NOT NULL,
    bs character varying(64) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE public.address (
    id serial,
    street character varying(64) NOT NULL,
    suite character varying(64) NOT NULL,
    city character varying(64) NOT NULL,
    zipcode character varying(64) NOT NULL,
    geo_id INTEGER NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (geo_id) REFERENCES geo(id)
);

CREATE TABLE public.users(
    id serial,
    name character varying(64) NOT NULL,
    username character varying(64) NOT NULL,
    email character varying(64) NOT NULL,
    address_id INTEGER null,
    company_id INTEGER null,
    phone character varying(64) NOT NULL,
    website character varying(64) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (address_id) REFERENCES address(id),
    FOREIGN KEY (company_id) REFERENCES company(id)
 );

CREATE TABLE public.todos(
    userId integer NOT NULL,
    id serial,
    title character varying(64) NOT NULL,
    complete character varying(64) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE public.posts(
    postId integer NOT NULL,
    id serial,
    title character varying(64) NOT NULL,
    body character varying(64) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE public.albums(
    userId integer,
    id serial,
    title character varying(64) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE public.comments(
    postId integer NOT NULL,
    id serial,
    name character varying(64) NOT NULL,
    email character varying(64) NOT NULL,
    body character varying(64) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE public.photos(
    albumId integer NOT NULL,
    id serial,
    title character varying(64) NULL,
    url character varying(64) NOT NULL,
    thumbnailUrl character varying(64),
    PRIMARY KEY(id)
);