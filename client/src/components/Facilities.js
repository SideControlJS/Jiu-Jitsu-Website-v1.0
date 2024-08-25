import React from'react';
import { Card, CardContent } from '@components/ui/card';

export const Facilities = () => {
    const gymPhotos = [
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
    ];

    return (
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-6">Our Facilities</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent>
                <h2 className="text-xl font-semibold mb-4">Location</h2>
                <div className="aspect-video">
                  <img 
                    src="/api/placeholder/600/400" 
                    alt="Map of gym location" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4">
                  123 Main Street, Anytown, USA 12345<br />
                  Phone: (555) 123-4567
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h2 className="text-xl font-semibold mb-4">Photo Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {gymPhotos.map((photo, index) => (
                    <img 
                      key={index} 
                      src={photo} 
                      alt={`Gym facility ${index + 1}`} 
                      className="w-full h-48 object-cover rounded"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      );
    };