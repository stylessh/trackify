interface IGeoLocation {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: number;
}

interface IGeoAs {
  asn: number;
  name: string;
  route: string;
  domain: string;
  type: string;
}

interface IGeoProxy {
  proxy: boolean;
  vpn: boolean;
  tor: boolean;
}

export default interface IGeoInfo {
  ip: string;
  isp: string;
  location: IGeoLocation;
  as: IGeoAs;
  domains: string[];
  proxy: IGeoProxy;
}
