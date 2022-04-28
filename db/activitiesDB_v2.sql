PGDMP     ,    1                z           activitiesDB    14.2    14.2 z    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24583    activitiesDB    DATABASE     r   CREATE DATABASE "activitiesDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE "activitiesDB";
                postgres    false            �            1259    24693 
   activities    TABLE     �  CREATE TABLE public.activities (
    id integer NOT NULL,
    seller_id integer NOT NULL,
    name character varying NOT NULL,
    category_id integer NOT NULL,
    age_category_id integer NOT NULL,
    capacity integer NOT NULL,
    facility_id integer NOT NULL,
    description text NOT NULL,
    plan_id integer NOT NULL,
    image character varying,
    price integer NOT NULL
);
    DROP TABLE public.activities;
       public         heap    postgres    false            �            1259    24692    activities_id_seq    SEQUENCE     �   CREATE SEQUENCE public.activities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.activities_id_seq;
       public          postgres    false    226            �           0    0    activities_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.activities_id_seq OWNED BY public.activities.id;
          public          postgres    false    225            �            1259    24765    activity_at_day    TABLE     �   CREATE TABLE public.activity_at_day (
    id integer NOT NULL,
    activity_id integer NOT NULL,
    day date NOT NULL,
    "time" time without time zone NOT NULL
);
 #   DROP TABLE public.activity_at_day;
       public         heap    postgres    false            �            1259    24764    activity_at_day_id_seq    SEQUENCE     �   CREATE SEQUENCE public.activity_at_day_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.activity_at_day_id_seq;
       public          postgres    false    232            �           0    0    activity_at_day_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.activity_at_day_id_seq OWNED BY public.activity_at_day.id;
          public          postgres    false    231            �            1259    24820    age_categories    TABLE     e   CREATE TABLE public.age_categories (
    id integer NOT NULL,
    name character varying NOT NULL
);
 "   DROP TABLE public.age_categories;
       public         heap    postgres    false            �            1259    24819    age_categories_id_seq    SEQUENCE     �   CREATE SEQUENCE public.age_categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.age_categories_id_seq;
       public          postgres    false    236            �           0    0    age_categories_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.age_categories_id_seq OWNED BY public.age_categories.id;
          public          postgres    false    235            �            1259    24651    bank_accounts    TABLE     �   CREATE TABLE public.bank_accounts (
    id integer NOT NULL,
    seller_id integer NOT NULL,
    iban text NOT NULL,
    account_number text NOT NULL,
    owner_name character varying
);
 !   DROP TABLE public.bank_accounts;
       public         heap    postgres    false            �            1259    24650    bank_accounts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.bank_accounts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.bank_accounts_id_seq;
       public          postgres    false    220            �           0    0    bank_accounts_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.bank_accounts_id_seq OWNED BY public.bank_accounts.id;
          public          postgres    false    219            �            1259    24637 
   bank_cards    TABLE     �   CREATE TABLE public.bank_cards (
    id integer NOT NULL,
    parent_id integer NOT NULL,
    card_number text NOT NULL,
    expiration_date date NOT NULL,
    ccv character varying NOT NULL,
    owner_name character varying
);
    DROP TABLE public.bank_cards;
       public         heap    postgres    false            �            1259    24636    bank_cards_id_seq    SEQUENCE     �   CREATE SEQUENCE public.bank_cards_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.bank_cards_id_seq;
       public          postgres    false    218            �           0    0    bank_cards_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.bank_cards_id_seq OWNED BY public.bank_cards.id;
          public          postgres    false    217            �            1259    24665 
   categories    TABLE     �   CREATE TABLE public.categories (
    id integer NOT NULL,
    parent_category_id integer,
    name character varying NOT NULL
);
    DROP TABLE public.categories;
       public         heap    postgres    false            �            1259    24664    categories_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.categories_id_seq;
       public          postgres    false    222            �           0    0    categories_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;
          public          postgres    false    221            �            1259    24746    evaluations    TABLE     �   CREATE TABLE public.evaluations (
    id integer NOT NULL,
    activity_id integer NOT NULL,
    parent_id integer NOT NULL,
    rating integer NOT NULL,
    comment text
);
    DROP TABLE public.evaluations;
       public         heap    postgres    false            �            1259    24745    evaluations_id_seq    SEQUENCE     �   CREATE SEQUENCE public.evaluations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.evaluations_id_seq;
       public          postgres    false    230            �           0    0    evaluations_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.evaluations_id_seq OWNED BY public.evaluations.id;
          public          postgres    false    229            �            1259    24679 
   facilities    TABLE       CREATE TABLE public.facilities (
    id integer NOT NULL,
    seller_id integer NOT NULL,
    name character varying NOT NULL,
    address character varying NOT NULL,
    district character varying,
    longitude double precision NOT NULL,
    latitude double precision NOT NULL
);
    DROP TABLE public.facilities;
       public         heap    postgres    false            �           0    0    COLUMN facilities.district    COMMENT     E   COMMENT ON COLUMN public.facilities.district IS 'η περιοχή';
          public          postgres    false    224            �            1259    24678    facilities_id_seq    SEQUENCE     �   CREATE SEQUENCE public.facilities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.facilities_id_seq;
       public          postgres    false    224            �           0    0    facilities_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.facilities_id_seq OWNED BY public.facilities.id;
          public          postgres    false    223            �            1259    24625    parents    TABLE     �   CREATE TABLE public.parents (
    id integer NOT NULL,
    user_id integer NOT NULL,
    longitude double precision NOT NULL,
    latitude double precision NOT NULL,
    address character varying NOT NULL
);
    DROP TABLE public.parents;
       public         heap    postgres    false            �            1259    24624    parents_id_seq    SEQUENCE     �   CREATE SEQUENCE public.parents_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.parents_id_seq;
       public          postgres    false    216            �           0    0    parents_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.parents_id_seq OWNED BY public.parents.id;
          public          postgres    false    215            �            1259    24717    plans    TABLE     V   CREATE TABLE public.plans (
    id integer NOT NULL,
    period daterange NOT NULL
);
    DROP TABLE public.plans;
       public         heap    postgres    false            �            1259    24716    plans_id_seq    SEQUENCE     �   CREATE SEQUENCE public.plans_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.plans_id_seq;
       public          postgres    false    228            �           0    0    plans_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.plans_id_seq OWNED BY public.plans.id;
          public          postgres    false    227            �            1259    24803    reservations    TABLE     �   CREATE TABLE public.reservations (
    id integer NOT NULL,
    parent_id integer NOT NULL,
    activity_id integer NOT NULL,
    day date NOT NULL,
    "time" time without time zone NOT NULL,
    date_of_reservation date NOT NULL
);
     DROP TABLE public.reservations;
       public         heap    postgres    false            �            1259    24802    reservations_id_seq    SEQUENCE     �   CREATE SEQUENCE public.reservations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.reservations_id_seq;
       public          postgres    false    234            �           0    0    reservations_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.reservations_id_seq OWNED BY public.reservations.id;
          public          postgres    false    233            �            1259    24597    roles    TABLE     \   CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying NOT NULL
);
    DROP TABLE public.roles;
       public         heap    postgres    false            �           0    0    TABLE roles    COMMENT     8   COMMENT ON TABLE public.roles IS 'the roles available';
          public          postgres    false    212            �            1259    24596    roles_id_seq    SEQUENCE     �   CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.roles_id_seq;
       public          postgres    false    212            �           0    0    roles_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;
          public          postgres    false    211            �            1259    24611    sellers    TABLE     �   CREATE TABLE public.sellers (
    id integer NOT NULL,
    user_id integer NOT NULL,
    watermark character varying NOT NULL
);
    DROP TABLE public.sellers;
       public         heap    postgres    false            �            1259    24610    sellers_id_seq    SEQUENCE     �   CREATE SEQUENCE public.sellers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.sellers_id_seq;
       public          postgres    false    214            �           0    0    sellers_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.sellers_id_seq OWNED BY public.sellers.id;
          public          postgres    false    213            �            1259    24584    users    TABLE     #  CREATE TABLE public.users (
    id integer NOT NULL,
    user_name character varying NOT NULL,
    password text NOT NULL,
    email character varying NOT NULL,
    role_id integer NOT NULL,
    status character varying NOT NULL,
    image character varying,
    balance integer NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �           0    0    TABLE users    COMMENT     _   COMMENT ON TABLE public.users IS 'Table for common info about user, regardless of their role';
          public          postgres    false    209            �            1259    24587    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    209            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    210            �           2604    24696    activities id    DEFAULT     n   ALTER TABLE ONLY public.activities ALTER COLUMN id SET DEFAULT nextval('public.activities_id_seq'::regclass);
 <   ALTER TABLE public.activities ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225    226            �           2604    24768    activity_at_day id    DEFAULT     x   ALTER TABLE ONLY public.activity_at_day ALTER COLUMN id SET DEFAULT nextval('public.activity_at_day_id_seq'::regclass);
 A   ALTER TABLE public.activity_at_day ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    231    232    232            �           2604    24823    age_categories id    DEFAULT     v   ALTER TABLE ONLY public.age_categories ALTER COLUMN id SET DEFAULT nextval('public.age_categories_id_seq'::regclass);
 @   ALTER TABLE public.age_categories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    236    235    236            �           2604    24654    bank_accounts id    DEFAULT     t   ALTER TABLE ONLY public.bank_accounts ALTER COLUMN id SET DEFAULT nextval('public.bank_accounts_id_seq'::regclass);
 ?   ALTER TABLE public.bank_accounts ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219    220            �           2604    24640    bank_cards id    DEFAULT     n   ALTER TABLE ONLY public.bank_cards ALTER COLUMN id SET DEFAULT nextval('public.bank_cards_id_seq'::regclass);
 <   ALTER TABLE public.bank_cards ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            �           2604    24668    categories id    DEFAULT     n   ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);
 <   ALTER TABLE public.categories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    222    222            �           2604    24749    evaluations id    DEFAULT     p   ALTER TABLE ONLY public.evaluations ALTER COLUMN id SET DEFAULT nextval('public.evaluations_id_seq'::regclass);
 =   ALTER TABLE public.evaluations ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    230    229    230            �           2604    24682    facilities id    DEFAULT     n   ALTER TABLE ONLY public.facilities ALTER COLUMN id SET DEFAULT nextval('public.facilities_id_seq'::regclass);
 <   ALTER TABLE public.facilities ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    223    224            �           2604    24628 
   parents id    DEFAULT     h   ALTER TABLE ONLY public.parents ALTER COLUMN id SET DEFAULT nextval('public.parents_id_seq'::regclass);
 9   ALTER TABLE public.parents ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            �           2604    24720    plans id    DEFAULT     d   ALTER TABLE ONLY public.plans ALTER COLUMN id SET DEFAULT nextval('public.plans_id_seq'::regclass);
 7   ALTER TABLE public.plans ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    227    228            �           2604    24806    reservations id    DEFAULT     r   ALTER TABLE ONLY public.reservations ALTER COLUMN id SET DEFAULT nextval('public.reservations_id_seq'::regclass);
 >   ALTER TABLE public.reservations ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    233    234    234            �           2604    24600    roles id    DEFAULT     d   ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);
 7   ALTER TABLE public.roles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211    212            �           2604    24614 
   sellers id    DEFAULT     h   ALTER TABLE ONLY public.sellers ALTER COLUMN id SET DEFAULT nextval('public.sellers_id_seq'::regclass);
 9   ALTER TABLE public.sellers ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213    214            �           2604    24588    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209            t          0    24693 
   activities 
   TABLE DATA           �   COPY public.activities (id, seller_id, name, category_id, age_category_id, capacity, facility_id, description, plan_id, image, price) FROM stdin;
    public          postgres    false    226   �       z          0    24765    activity_at_day 
   TABLE DATA           G   COPY public.activity_at_day (id, activity_id, day, "time") FROM stdin;
    public          postgres    false    232   �       ~          0    24820    age_categories 
   TABLE DATA           2   COPY public.age_categories (id, name) FROM stdin;
    public          postgres    false    236   $�       n          0    24651    bank_accounts 
   TABLE DATA           X   COPY public.bank_accounts (id, seller_id, iban, account_number, owner_name) FROM stdin;
    public          postgres    false    220   A�       l          0    24637 
   bank_cards 
   TABLE DATA           b   COPY public.bank_cards (id, parent_id, card_number, expiration_date, ccv, owner_name) FROM stdin;
    public          postgres    false    218   ^�       p          0    24665 
   categories 
   TABLE DATA           B   COPY public.categories (id, parent_category_id, name) FROM stdin;
    public          postgres    false    222   {�       x          0    24746    evaluations 
   TABLE DATA           R   COPY public.evaluations (id, activity_id, parent_id, rating, comment) FROM stdin;
    public          postgres    false    230   ��       r          0    24679 
   facilities 
   TABLE DATA           a   COPY public.facilities (id, seller_id, name, address, district, longitude, latitude) FROM stdin;
    public          postgres    false    224   ��       j          0    24625    parents 
   TABLE DATA           L   COPY public.parents (id, user_id, longitude, latitude, address) FROM stdin;
    public          postgres    false    216   ҍ       v          0    24717    plans 
   TABLE DATA           +   COPY public.plans (id, period) FROM stdin;
    public          postgres    false    228   �       |          0    24803    reservations 
   TABLE DATA           d   COPY public.reservations (id, parent_id, activity_id, day, "time", date_of_reservation) FROM stdin;
    public          postgres    false    234   �       f          0    24597    roles 
   TABLE DATA           )   COPY public.roles (id, name) FROM stdin;
    public          postgres    false    212   )�       h          0    24611    sellers 
   TABLE DATA           9   COPY public.sellers (id, user_id, watermark) FROM stdin;
    public          postgres    false    214   F�       c          0    24584    users 
   TABLE DATA           `   COPY public.users (id, user_name, password, email, role_id, status, image, balance) FROM stdin;
    public          postgres    false    209   c�       �           0    0    activities_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.activities_id_seq', 1, false);
          public          postgres    false    225            �           0    0    activity_at_day_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.activity_at_day_id_seq', 1, false);
          public          postgres    false    231            �           0    0    age_categories_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.age_categories_id_seq', 1, false);
          public          postgres    false    235            �           0    0    bank_accounts_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.bank_accounts_id_seq', 1, false);
          public          postgres    false    219            �           0    0    bank_cards_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.bank_cards_id_seq', 1, false);
          public          postgres    false    217            �           0    0    categories_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.categories_id_seq', 1, false);
          public          postgres    false    221            �           0    0    evaluations_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.evaluations_id_seq', 1, false);
          public          postgres    false    229            �           0    0    facilities_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.facilities_id_seq', 1, false);
          public          postgres    false    223            �           0    0    parents_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.parents_id_seq', 1, false);
          public          postgres    false    215            �           0    0    plans_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.plans_id_seq', 1, false);
          public          postgres    false    227            �           0    0    reservations_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.reservations_id_seq', 1, false);
          public          postgres    false    233            �           0    0    roles_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.roles_id_seq', 1, false);
          public          postgres    false    211            �           0    0    sellers_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.sellers_id_seq', 1, false);
          public          postgres    false    213            �           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 1, false);
          public          postgres    false    210            �           2606    24700    activities activities_pk 
   CONSTRAINT     V   ALTER TABLE ONLY public.activities
    ADD CONSTRAINT activities_pk PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.activities DROP CONSTRAINT activities_pk;
       public            postgres    false    226            �           2606    24770 "   activity_at_day activity_at_day_pk 
   CONSTRAINT     `   ALTER TABLE ONLY public.activity_at_day
    ADD CONSTRAINT activity_at_day_pk PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.activity_at_day DROP CONSTRAINT activity_at_day_pk;
       public            postgres    false    232            �           2606    24827     age_categories age_categories_pk 
   CONSTRAINT     ^   ALTER TABLE ONLY public.age_categories
    ADD CONSTRAINT age_categories_pk PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.age_categories DROP CONSTRAINT age_categories_pk;
       public            postgres    false    236            �           2606    24658    bank_accounts bank_accounts_pk 
   CONSTRAINT     \   ALTER TABLE ONLY public.bank_accounts
    ADD CONSTRAINT bank_accounts_pk PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.bank_accounts DROP CONSTRAINT bank_accounts_pk;
       public            postgres    false    220            �           2606    24644    bank_cards bank_cards_pk 
   CONSTRAINT     V   ALTER TABLE ONLY public.bank_cards
    ADD CONSTRAINT bank_cards_pk PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.bank_cards DROP CONSTRAINT bank_cards_pk;
       public            postgres    false    218            �           2606    24672    categories categories_pk 
   CONSTRAINT     V   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pk PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pk;
       public            postgres    false    222            �           2606    24753    evaluations evaluations_pk 
   CONSTRAINT     X   ALTER TABLE ONLY public.evaluations
    ADD CONSTRAINT evaluations_pk PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.evaluations DROP CONSTRAINT evaluations_pk;
       public            postgres    false    230            �           2606    24686    facilities facilities_pk 
   CONSTRAINT     V   ALTER TABLE ONLY public.facilities
    ADD CONSTRAINT facilities_pk PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.facilities DROP CONSTRAINT facilities_pk;
       public            postgres    false    224            �           2606    24630    parents parents_pk 
   CONSTRAINT     P   ALTER TABLE ONLY public.parents
    ADD CONSTRAINT parents_pk PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.parents DROP CONSTRAINT parents_pk;
       public            postgres    false    216            �           2606    24724    plans plans_pk 
   CONSTRAINT     L   ALTER TABLE ONLY public.plans
    ADD CONSTRAINT plans_pk PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.plans DROP CONSTRAINT plans_pk;
       public            postgres    false    228            �           2606    24808    reservations reservations_pk 
   CONSTRAINT     Z   ALTER TABLE ONLY public.reservations
    ADD CONSTRAINT reservations_pk PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.reservations DROP CONSTRAINT reservations_pk;
       public            postgres    false    234            �           2606    24604    roles roles_pk 
   CONSTRAINT     L   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pk PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pk;
       public            postgres    false    212            �           2606    24618    sellers sellers_pk 
   CONSTRAINT     P   ALTER TABLE ONLY public.sellers
    ADD CONSTRAINT sellers_pk PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.sellers DROP CONSTRAINT sellers_pk;
       public            postgres    false    214            �           2606    24593    users users_pk 
   CONSTRAINT     L   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pk;
       public            postgres    false    209            �           2606    24701    activities activities_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.activities
    ADD CONSTRAINT activities_fk FOREIGN KEY (seller_id) REFERENCES public.sellers(id) ON UPDATE CASCADE ON DELETE SET NULL;
 B   ALTER TABLE ONLY public.activities DROP CONSTRAINT activities_fk;
       public          postgres    false    214    3248    226            �           2606    24706    activities activities_fk_1    FK CONSTRAINT     �   ALTER TABLE ONLY public.activities
    ADD CONSTRAINT activities_fk_1 FOREIGN KEY (category_id) REFERENCES public.categories(id) ON UPDATE CASCADE ON DELETE SET NULL;
 D   ALTER TABLE ONLY public.activities DROP CONSTRAINT activities_fk_1;
       public          postgres    false    226    222    3256            �           2606    24711    activities activities_fk_2    FK CONSTRAINT     �   ALTER TABLE ONLY public.activities
    ADD CONSTRAINT activities_fk_2 FOREIGN KEY (facility_id) REFERENCES public.facilities(id) ON UPDATE CASCADE ON DELETE SET NULL;
 D   ALTER TABLE ONLY public.activities DROP CONSTRAINT activities_fk_2;
       public          postgres    false    226    3258    224            �           2606    24725    activities activities_fk_3    FK CONSTRAINT     �   ALTER TABLE ONLY public.activities
    ADD CONSTRAINT activities_fk_3 FOREIGN KEY (plan_id) REFERENCES public.plans(id) ON UPDATE CASCADE ON DELETE SET NULL;
 D   ALTER TABLE ONLY public.activities DROP CONSTRAINT activities_fk_3;
       public          postgres    false    228    3262    226            �           2606    24828    activities activities_fk_4    FK CONSTRAINT     �   ALTER TABLE ONLY public.activities
    ADD CONSTRAINT activities_fk_4 FOREIGN KEY (age_category_id) REFERENCES public.age_categories(id) ON UPDATE CASCADE ON DELETE SET NULL;
 D   ALTER TABLE ONLY public.activities DROP CONSTRAINT activities_fk_4;
       public          postgres    false    226    236    3270            �           2606    24771 "   activity_at_day activity_at_day_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.activity_at_day
    ADD CONSTRAINT activity_at_day_fk FOREIGN KEY (activity_id) REFERENCES public.activities(id) ON UPDATE CASCADE ON DELETE SET NULL;
 L   ALTER TABLE ONLY public.activity_at_day DROP CONSTRAINT activity_at_day_fk;
       public          postgres    false    226    3260    232            �           2606    24659    bank_accounts bank_accounts_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.bank_accounts
    ADD CONSTRAINT bank_accounts_fk FOREIGN KEY (seller_id) REFERENCES public.sellers(id) ON UPDATE CASCADE ON DELETE SET NULL;
 H   ALTER TABLE ONLY public.bank_accounts DROP CONSTRAINT bank_accounts_fk;
       public          postgres    false    220    214    3248            �           2606    24645    bank_cards bank_cards_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.bank_cards
    ADD CONSTRAINT bank_cards_fk FOREIGN KEY (parent_id) REFERENCES public.parents(id) ON UPDATE CASCADE ON DELETE SET NULL;
 B   ALTER TABLE ONLY public.bank_cards DROP CONSTRAINT bank_cards_fk;
       public          postgres    false    3250    216    218            �           2606    24673    categories categories_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_fk FOREIGN KEY (parent_category_id) REFERENCES public.categories(id) ON UPDATE CASCADE ON DELETE SET NULL;
 B   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_fk;
       public          postgres    false    3256    222    222            �           2606    24754    evaluations evaluations_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.evaluations
    ADD CONSTRAINT evaluations_fk FOREIGN KEY (activity_id) REFERENCES public.activities(id) ON UPDATE CASCADE ON DELETE SET NULL;
 D   ALTER TABLE ONLY public.evaluations DROP CONSTRAINT evaluations_fk;
       public          postgres    false    226    3260    230            �           2606    24759    evaluations evaluations_fk_1    FK CONSTRAINT     �   ALTER TABLE ONLY public.evaluations
    ADD CONSTRAINT evaluations_fk_1 FOREIGN KEY (parent_id) REFERENCES public.parents(id) ON UPDATE CASCADE ON DELETE SET NULL;
 F   ALTER TABLE ONLY public.evaluations DROP CONSTRAINT evaluations_fk_1;
       public          postgres    false    3250    230    216            �           2606    24687    facilities facilities_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.facilities
    ADD CONSTRAINT facilities_fk FOREIGN KEY (seller_id) REFERENCES public.sellers(id) ON UPDATE CASCADE ON DELETE SET NULL;
 B   ALTER TABLE ONLY public.facilities DROP CONSTRAINT facilities_fk;
       public          postgres    false    3248    214    224            �           2606    24631    parents parents_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.parents
    ADD CONSTRAINT parents_fk FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 <   ALTER TABLE ONLY public.parents DROP CONSTRAINT parents_fk;
       public          postgres    false    209    216    3244            �           2606    24809    reservations reservations_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.reservations
    ADD CONSTRAINT reservations_fk FOREIGN KEY (activity_id) REFERENCES public.activities(id) ON UPDATE CASCADE ON DELETE SET NULL;
 F   ALTER TABLE ONLY public.reservations DROP CONSTRAINT reservations_fk;
       public          postgres    false    3260    234    226            �           2606    24814    reservations reservations_fk_1    FK CONSTRAINT     �   ALTER TABLE ONLY public.reservations
    ADD CONSTRAINT reservations_fk_1 FOREIGN KEY (parent_id) REFERENCES public.parents(id) ON UPDATE CASCADE ON DELETE SET NULL;
 H   ALTER TABLE ONLY public.reservations DROP CONSTRAINT reservations_fk_1;
       public          postgres    false    234    3250    216            �           2606    24619    sellers sellers_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.sellers
    ADD CONSTRAINT sellers_fk FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 <   ALTER TABLE ONLY public.sellers DROP CONSTRAINT sellers_fk;
       public          postgres    false    209    3244    214            �           2606    24605    users users_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_fk FOREIGN KEY (role_id) REFERENCES public.roles(id) ON UPDATE CASCADE ON DELETE SET NULL;
 8   ALTER TABLE ONLY public.users DROP CONSTRAINT users_fk;
       public          postgres    false    3246    209    212            t      x������ � �      z      x������ � �      ~      x������ � �      n      x������ � �      l      x������ � �      p      x������ � �      x      x������ � �      r      x������ � �      j      x������ � �      v      x������ � �      |      x������ � �      f      x������ � �      h      x������ � �      c      x������ � �     