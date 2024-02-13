import { fetchContent } from "@/utils/fetch-content";

export async function getBannerSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/perspective`;
  const urlParamsObject = {
    populate: {
      banner: {
        populate: {
          curated_experiences_cards: {
            populate: {
              media: true,
              article: {
                populate: {
                  card: {
                    populate: {
                      image: true,
                    },
                  },
                  curated_experiences_cards: {
                    populate: { media: true },
                  },
                  ips_cards: { populate: { media: true } },
                  viewpoint_cards: {
                    populate: { media: true, thumbnail: true },
                  },
                  media_cards: {
                    populate: { media: true },
                  },
                },
              },
            },
          },
          viewpoint_cards: {
            populate: {
              media: true,
              thumbnail: true,
              article: {
                populate: {
                  card: {
                    populate: {
                      image: true,
                    },
                  },
                  curated_experiences_cards: {
                    populate: { media: true },
                  },
                  ips_cards: { populate: { media: true } },
                  viewpoint_cards: {
                    populate: { media: true, thumbnail: true },
                  },
                  media_cards: {
                    populate: { media: true },
                  },
                },
              },
            },
          },
          ips_cards: {
            populate: {
              media: true,
              article: {
                populate: {
                  card: {
                    populate: {
                      image: true,
                    },
                  },
                  curated_experiences_cards: {
                    populate: { media: true },
                  },
                  ips_cards: { populate: { media: true } },
                  viewpoint_cards: {
                    populate: { media: true, thumbnail: true },
                  },
                  media_cards: {
                    populate: { media: true },
                  },
                },
              },
            },
          },
          reports_and_publications_cards: {
            populate: { media: true, pdf: true },
          },
          media_cards: {
            populate: {
              media: true,
              thumbnail: true,
              article: {
                populate: {
                  card: {
                    populate: {
                      image: true,
                    },
                  },
                  curated_experiences_cards: {
                    populate: { media: true },
                  },
                  ips_cards: { populate: { media: true } },
                  viewpoint_cards: {
                    populate: { media: true, thumbnail: true },
                  },
                  media_cards: {
                    populate: { media: true },
                  },
                },
              },
            },
          },
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}

export async function getViewpointSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/perspective`;
  const urlParamsObject = {
    populate: {
      viewpoint: {
        populate: {
          viewpoint_cards: {
            populate: {
              media: true,
              thumbnail: true,
              article: {
                populate: {
                  card: {
                    populate: {
                      image: true,
                    },
                  },
                  curated_experiences_cards: {
                    populate: { media: true },
                  },
                  ips_cards: { populate: { media: true } },
                  viewpoint_cards: {
                    populate: { media: true, thumbnail: true },
                  },
                  media_cards: {
                    populate: { media: true },
                  },
                },
              },
            },
          },
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}

export async function getCuratedExperienceSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/perspective`;
  const urlParamsObject = {
    populate: {
      experiences: {
        populate: {
          curated_experiences_cards: {
            populate: {
              media: true,
              article: {
                populate: {
                  card: {
                    populate: {
                      image: true,
                    },
                  },
                  curated_experiences_cards: {
                    populate: { media: true },
                  },
                  ips_cards: { populate: { media: true } },
                  viewpoint_cards: {
                    populate: { media: true, thumbnail: true },
                  },
                  media_cards: {
                    populate: { media: true },
                  },
                },
              },
            },
          },
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}

export async function getOurIpsSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/perspective`;
  const urlParamsObject = {
    populate: {
      ips: {
        populate: {
          ips_cards: {
            populate: {
              media: true,
              article: {
                populate: {
                  card: {
                    populate: {
                      image: true,
                    },
                  },
                  curated_experiences_cards: {
                    populate: { media: true },
                  },
                  ips_cards: { populate: { media: true } },
                  viewpoint_cards: {
                    populate: { media: true, thumbnail: true },
                  },
                  media_cards: {
                    populate: { media: true },
                  },
                },
              },
            },
          },
        },
      },
    },
  };

  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}

export async function getReportsSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/perspective`;
  const urlParamsObject = {
    populate: {
      reports: {
        populate: {
          reports_and_publications_cards: {
            populate: { media: true, pdf: true },
          },
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}

export async function getInMediaSection() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
  const path = `/perspective`;
  const urlParamsObject = {
    populate: {
      media: {
        populate: {
          media_cards: {
            populate: {
              media: true,
              thumbnail: true,
              article: {
                populate: {
                  card: {
                    populate: {
                      image: true,
                    },
                  },
                  curated_experiences_cards: {
                    populate: { media: true },
                  },
                  ips_cards: { populate: { media: true } },
                  viewpoint_cards: {
                    populate: { media: true, thumbnail: true },
                  },
                  media_cards: {
                    populate: { media: true },
                  },
                },
              },
            },
          },
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchContent(path, urlParamsObject, options);
  return response;
}
